import { db, promiseDb } from "../config/connect.js";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const Song = function (song) {
  this.title = song.title;
  this.image_path = song.image_path;
  this.song_path = song.song_path;
  this.public = song.public;
  this.genre_id = song.genre_id;
};

Song.create = (userId, newSong, result) => {
  db.query(
    `insert into songs set ?, user_id = ?, id = ? `,
    [newSong, userId, uuidv4()],
    (err, res) => {
      if (err) {
        console.log("ERROR", err);
        result(err, null);
        return;
      }
      console.log("CREATE SONG : ", { res });
      result(null, { id: res.insertId, ...newSong });
    }
  );
};

Song.update = (songId, newSong, result) => {
  db.query(
    `update songs set ? ,update_at = '${moment(Date.now()).format(
      "YYYY-MM-DD HH:mm:ss"
    )}' where id = ${songId}`,
    newSong,
    (err, res) => {
      if (err) {
        console.log("ERROR", err);
        result(err, null);
        return;
      }
      console.log("UPDATE : ", { res });
      result(null, { id: songId, ...newSong });
    }
  );
};

//Xóa mềm
Song.delete = (songId, result) => {
  db.query(
    `UPDATE songs SET is_deleted = 1 ,update_at = '${moment(Date.now()).format(
      "YYYY-MM-DD HH:mm:ss"
    )}' where id = ${songId}`,
    (err, res) => {
      if (err) {
        console.log("ERROR", err);
        result(err, null);
        return;
      }
      result(null, { id: songId });
    }
  );
};


Song.findById = (songId, userId, result) => {
    db.query(
      `SELECT s.*, u.name as author ` +
        ` FROM songs as s` +
        ` LEFT JOIN users AS u ON s.user_id = u.id` +
        ` WHERE s.id = ? AND s.is_deleted = 0`,
      [songId],
      (err, song) => {
        if (err) {
          // Xử lý lỗi
          console.error("Error while querying database:", err);
          result(err, null);
          return;
        }
  
        if (!song || !song.length) {
          result("Không tìm thấy !", null);
          return;
        }
  
        // Kiểm tra quyền truy cập
        if (song[0].public === 0 && song[0].user_id !== userId) {
          result("Bài hát đang ẩn !", null);
          return;
        }
  
        // Trả về kết quả
        result(null, song[0]);
      }
    );
  };


export default Song