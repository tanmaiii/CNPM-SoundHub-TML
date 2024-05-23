import { Router } from "express";
const router = Router();
import playlistController from "../controllers/playlist.controller.js";
import playlistValidation from "../validations/playlist.validation.js";

import validate from "../middlewares/validate.js";

router.get(
  "/checkLiked/:playlistId",
  validate(playlistValidation.checkLike),
  playlistController.checkPlaylistLike
);

router.post(
  "/like/:playlistId",
  validate(playlistValidation.like),
  playlistController.likePlaylist
);

router.delete(
  "/like/:playlistId",
  validate(playlistValidation.unLike),
  playlistController.unLikePlaylist
);

export default router;
