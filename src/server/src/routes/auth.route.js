import { Router } from "express";
const router = Router();
import authController from "../controllers/auth.controller.js";
import authValidation from "../validations/auth.validation.js";
import validate from "../middlewares/validate.js";

router.post("/signup", validate(authValidation.signup), authController.signup);
router.post("/signin", validate(authValidation.signin), authController.signin);
router.post(
  "/send-verify-account",
  validate(authValidation.sendVerifyAccount),
  authController.sendVerifyAccount
);
router.post(
  "/verify-account",
  validate(authValidation.verifyAccount),
  authController.verifyAccount
);

router.post("/change-password", validate(authValidation.changePassword),authController.changePassword);
export default router;
