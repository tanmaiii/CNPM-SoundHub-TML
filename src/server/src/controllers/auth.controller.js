import User from "../model/user.model.js";
import VerifyCode from "../model/verifyCode.model.js";
import bcrypt from "bcrypt";
import randomstring from "randomstring";
import emailService from "../services/emailService/index.js";

export const signup = async (req, res) => {
  try {
    User.findByEmail(req.body.email, (err, user) => {
      if (err || user) {
        return res.status(401).json({ conflictError: "Email is already in use." });
      } else {
        // mã hóa mật khẩu
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
          email: req.body.email,
          password: hashedPassword,
          name: req.body.name,
          gender: req.body.gender,
          brithday: req.body.brithday,
        });

        User.create(newUser, (err, result) => {
          if (err) {
            return res.json(err);
          }
          return res.json(result);
        });
      }
    });
  } catch (error) {
    console.log(req?.body?.email);
    res.status(401).json(error);
  }
};

// Gửi xác thực tài khoản
export const sendVerifyAccount = async (req, res) => {
  try {
    const email = req.body.email;
    User.findByEmail(email, async (err, user) => {
      if (err || !user) {
        return res.status(401).json({ conflictError: "Email not found!" });
      }

      if (user.email_verified_at !== null) {
        return res.status(401).json({ conflictError: "Account has been verified!" });
      }

      // const token = jwtService.generateToken({ email }, { expiresIn: "1h" });
      const code = randomstring.generate({
        length: 4,
        charset: "numeric",
      });

      const verificationResult = await emailService.sendVerificationAccount(email, code);

      if (!verificationResult.success)
        return res.json({
          success: false,
          data: "Đã xảy ra lỗi khi gửi email xác minh",
        });

      VerifyCode.create(user.id, code, async (err, result) => {
        if (err) {
          return res.status(401).json({ conflictError: err });
        }
        console.log("✉️ Send verification email : " + email + " - code : " + code);

        return res.json({
          success: true,
          data: "Email verification sent successfully !",
          // code: code,
        });
      });
    });
  } catch (error) {
    return res.status(500).json({ conflictError: "Error send email" });
  }
};

// Xác thực tài khoản
export const verifyAccount = async (req, res) => {
  try {
    const { code, email } = req.body;

    User.findByEmail(email, (err, user) => {
      if (err || !user) return res.status(500).json({ conflictError: "User not found" });
      if (user.email_verified_at !== null) {
        console.log(" Account has been verified! ");
        return res.json({
          success: true,
          data: "Account has been verified! ",
        });
      } else {
        VerifyCode.find(user.id, (err, verify) => {
          if (err || !verify) {
            return res.status(500).json({ conflictError: "Error during request processing" });
          }

          const codeSql = verify.code;

          if (parseInt(codeSql) === parseInt(code)) {
            // return res.json({ codeSql, code });
            User.verify(email, (err, result) => {
              if (err || !result) {
                return res.status(401).json(err);
              } else {
                console.log("Verify Account", email - code);
                VerifyCode.delete(user.id, (err, result) => {});
                return res.json({
                  success: true,
                  data: "Email authentication successful!",
                });
              }
            });
          } else {
            return res.status(500).json({ conflictError: "Code does not match" });
          }
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ conflictError: "Error during request processing" });
  }
};

export default {
  signup,
  sendVerifyAccount,
  verifyAccount,
};
