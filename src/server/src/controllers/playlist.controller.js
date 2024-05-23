import Playlist from "../model/playlist.model.js";
import jwtService from "../services/jwtService.js";

export const checkPlaylistLike = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const userInfo = await jwtService.verifyToken(token);

    // Tìm bài hát trong database dựa trên songId
    Playlist.findById(req.params.playlistId, userInfo.id, (err, song) => {
      if (err || !song) {
        return res.status(404).json({ conflictError: "Playlist not found" });
      } else {
        // Kiểm tra xem userId có tồn tại trong danh sách người thích của bài hát hay không
        Playlist.findUserLike(req.params.playlistId, (err, data) => {
          if (data) {
            const isLiked = data.includes(userInfo.id);
            return res.status(200).json({ isLiked });
          } else {
            return res.status(200).json({ isLiked: false });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const likePlaylist = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    console.log("body ne", req.body);
    const userInfo = await jwtService.verifyToken(token);

    Playlist.like(req.params.playlistId, userInfo.id, (err, data) => {
      if (err) {
        const conflictError = err;
        return res.status(401).json({ conflictError });
      } else {
        return res.json(data);
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const unLikePlaylist = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    const userInfo = await jwtService.verifyToken(token);

    Playlist.unlike(req.params.playlistId, userInfo.id, (err, data) => {
      if (err) {
        const conflictError = err;
        return res.status(401).json({ conflictError });
      } else {
        return res.json(data);
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};


export default {
  checkPlaylistLike,
  likePlaylist,
  unLikePlaylist,
};
