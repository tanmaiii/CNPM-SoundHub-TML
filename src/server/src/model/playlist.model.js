import { db, promiseDb } from "../config/connect.js";
import { v4 as uuidv4 } from "uuid";

const Playlist = (playlist) => {
  this.id = playlist.id;
  this.title = playlist.title;
  this.desc = playlist.desc;
  this.image_path = playlist.image_path;
  this.genre_id = playlist.genre_id;
  this.public = playlist.public;
};

Playlist.findById = (playlistId, userId, result) => {
  db.query(
    `SELECT p.*, u.name as author ` +
      ` FROM playlists as p` +
      ` LEFT JOIN users AS u ON p.user_id = u.id` +
      ` WHERE p.id = ? AND p.is_deleted = 0 `,
    [playlistId],
    (err, playlist) => {
      if (err) {
        result(err, null);
        return;
      }

      if (playlist.length) {
        if (playlist[0].public === 0 && playlist[0].user_id !== userId) {
          result("Playlist đang được ẩn", null);
          return;
        } else {
          result(null, playlist[0]);
          return;
        }
      }
      result("Không tìm thấy playlist !", null);
    }
  );
};

Playlist.findUserLike = (playlistId, result) => {
  db.query(
    `SELECT user_id FROM favourite_playlists as fs WHERE fs.playlist_id = ?`,
    [playlistId],
    (err, data) => {
      if (err) {
        result(err, null);
        return;
      }

      if (data.length) {
        result(
          null,
          data.map((user) => user.user_id)
        );
        return;
      }

      result(null, null);
    }
  );
};

Playlist.like = (playlistId, userId, result) => {
  // Tìm kiếm bài hát theo id
  Playlist.findById(playlistId, userId, (err, playlist) => {
    if (err) {
      console.log("ERROR", err);
      result(err, null);
      return;
    }

    if (!playlist) {
      console.log("playlist không tồn tại");
      result("playlist không tồn tại", null);
      return;
    }

    // Kiểm tra xem người dùng đã thích bài hát này chưa
    db.query(
      "SELECT * FROM favourite_playlists WHERE user_id = ? AND playlist_id = ?",
      [userId, playlistId],
      (queryErr, rows) => {
        if (queryErr) {
          console.log("ERROR", queryErr);
          result(queryErr, null);
          return;
        }

        // Nếu người dùng đã thích bài hát này trước đó, không thực hiện thêm
        if (rows.length > 0) {
          console.log("playlist đã được thích bởi người dùng");
          result("playlist đã được thích bởi người dùng", null);
          return;
        }

        // Thêm bài hát vào danh sách bài hát yêu thích của người dùng
        db.query(
          "INSERT INTO favourite_playlists SET `user_id` = ?, `playlist_id`= ?",
          [userId, playlistId],
          (insertErr, insertRes) => {
            if (insertErr) {
              console.log("ERROR", insertErr);
              result(insertErr, null);
              return;
            }
            // Trả về thông tin bài hát đã được thêm vào danh sách yêu thích
            result(null, { playlist_id: playlistId, user_id: userId });
          }
        );
      }
    );
  });
};

Playlist.unlike = (playlistId, userId, result) => {
  // Kiểm tra xem bài hát đã được yêu thích bởi người dùng chưa
  db.query(
    "SELECT * FROM favourite_playlists WHERE user_id = ? AND playlist_id = ?",
    [userId, playlistId],
    (queryErr, rows) => {
      if (queryErr) {
        console.log("ERROR", queryErr);
        result(queryErr, null);
        return;
      }

      // Nếu không tìm thấy bài hát trong danh sách yêu thích của người dùng, trả về lỗi
      if (rows.length === 0) {
        console.log("Playlist không được thích bởi người dùng");
        result("Playlist không được thích bởi người dùng", null);
        return;
      }

      // Xóa bài hát khỏi danh sách yêu thích của người dùng
      db.query(
        "DELETE FROM favourite_playlists WHERE user_id = ? AND playlist_id = ?",
        [userId, playlistId],
        (deleteErr, deleteRes) => {
          if (deleteErr) {
            console.log("ERROR", deleteErr);
            result(deleteErr, null);
            return;
          }
          // Trả về thông tin bài hát đã bị xóa khỏi danh sách yêu thích
          result(null, { playlist_id: playlistId, user_id: userId });
        }
      );
    }
  );
};

export default Playlist;
