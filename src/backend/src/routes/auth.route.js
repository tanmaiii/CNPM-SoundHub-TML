import { Router } from "express";
const router = Router();
import authController from "../controllers/auth.controller.js";
import authValidation from "../validations/auth.validation.js";
import validate from "../middlewares/validate.js";

router.post("/signup", validate(authValidation.signup), authController.signup);

export default router;
