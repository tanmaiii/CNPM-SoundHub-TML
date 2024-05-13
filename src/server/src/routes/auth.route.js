import { Router } from "express";
const router = Router();
import authController from "../controllers/auth.controller.js";
import authValidation from "../validations/auth.validation.js";
import validate from "../middlewares/validate.js";

router.post("/signup", validate(authValidation.signup), authController.signup);
router.post("/signin", validate(authValidation.signin), authController.signin);
router.get("/signout", authController.signout);

router.post(
  "/reset-password",
  validate(authValidation.resetPassword),
  authController.resetPassword
);

router.post(
  "/change-password",
  validate(authValidation.changePassword),
  authController.changePassword
);

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

router.post(
  "/verify-forgot-password",
  validate(authValidation.verifyForgotPassword),
  authController.verifyPassword
);

export default router;
