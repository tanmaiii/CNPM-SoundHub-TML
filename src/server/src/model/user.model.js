import { db, promiseDb } from "../config/connect.js";
import { v4 as uuidv4 } from "uuid";

const User = function (user) {
  this.email = user.email;
  this.password = user.password;
  this.name = user.name;
  this.brithday = user.brithday;
  this.gender = user.gender;
  this.image_path = user.image_path;
  this.verified = user.verified;
  this.is_admin = user.is_admin;
  this.email_verified_at = user.email_verified_at;
};

User.create = (newUser, result) => {
  db.query(`insert into users set ? , id = ?`, [newUser, uuidv4()], (err, res) => {
    if (err) {
      console.log("ERROR", err);
      result(err, null);
      return;
    }
    console.log("CREATE USER : ", { res });
    result(null, { id: res.insertId, ...newUser });
  });
};

//kiểm tra email đã được dùng chưa
User.findByEmail = (email, result) => {
  db.query(`SELECT * from users WHERE email = ?`, email, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;
    }
    result(null, null);
  });
};

User.verify = function (email, result) {
  db.query(
    `UPDATE users SET email_verified_at = ? WHERE email = ?`,
    [new Date(), email],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { email: email });
    }
  );
};

export default User;
