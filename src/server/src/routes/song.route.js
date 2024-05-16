import { Router } from "express";
const router = Router();
import songController from "../controllers/song.controller.js";
import songValidation from "../validations/song.validation.js";
import validate from "../middlewares/validate.js";

router.get("/detail/:songId", validate(songValidation.getSong), songController.getSong);
router.put("/:songId", validate(songValidation.updateSong), songController.updateSong);
router.post("/", validate(songValidation.createSong), songController.createSong);
router.patch("/delete/:songId", validate(songValidation.deleteSong), songController.deleteSong);

export default router