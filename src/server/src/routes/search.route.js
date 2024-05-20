import { Router } from "express";
import searchController from "../controllers/search.controller.js";
import searchValidation from "../validations/search.validation.js";
import validate from "../middlewares/validate.js";
const router = Router();

router.get("/", validate(searchValidation.getAll), searchController.getAll);
router.get("/songs", validate(searchValidation.getAll), searchController.getAllSongs);

export default router;
