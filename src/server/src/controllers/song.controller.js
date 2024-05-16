import Song from "../model/song.model.js";
import jwtService from "../services/jwtService.js";

export const getSong = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const userInfo = await jwtService.verifyToken(token);

    Song.findById(req.params.songId, userInfo.id, (err, song) => {
      if (err) {
        return res.status(401).json({ conflictError: err });
      }
      if (!song) {
        return res.status(404).json({ conflictError: "Không tìm thấy !" });
      }
      console.log("Get song", song);
      return res.json(song);
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createSong = async (req, res) => {
  try {
    // const token = req.cookies.accessToken;
    const token = req.headers["authorization"];
    const userInfo = await jwtService.verifyToken(token);

    Song.create(userInfo.id, req.body, (err, data) => {
      if (err) {
        const conflictError = err;
        return res.status(401).json({ conflictError });
      } else {
        console.log("CREATED SONG: ", data);
        return res.json(data);
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateSong = async (req, res) => {
  try {
    // const token = req.cookies.accessToken;
    const token = req.headers["authorization"];
    const userInfo = await jwtService.verifyToken(token);

    Song.findById(req.params.songId, userInfo.id, (err, song) => {
      if (err) {
        return res.status(401).json({ conflictError: err });
      }
      if (song.user_id !== userInfo.id) {
        return res.status(401).json({ conflictError: "Không có quyền sửa" });
      }
      Song.update(req.params.songId, req.body, (err, data) => {
        if (err) {
          const conflictError = err;
          return res.status(401).json({ conflictError });
        } else {
          return res.json(data);
        }
      });
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteSong = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const userInfo = await jwtService.verifyToken(token);

    Song.findById(req.params.songId, userInfo.id, (err, song) => {
      if (err) {
        return res.status(400).json({ conflictError: err });
      }

      if (!song) {
        return res.status(404).json({ conflictError: "Không tìm thấy bài hát !" });
      }

      if (song.user_id !== userInfo.id) {
        return res.status(401).json({ conflictError: "Không có quyền xóa bài hát !" });
      }

      Song.delete(req.params.songId, (err, data) => {
        if (err) {
          return res.status(401).json({ conflictError: err });
        } else {
          return res.json(data);
        }
      });
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
  getSong,
  createSong,
  updateSong,
  deleteSong,
};
