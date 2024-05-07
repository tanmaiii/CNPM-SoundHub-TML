import User from "../model/user.model.js";
import bcrypt from "bcrypt";

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

export default {
  signup,
};
