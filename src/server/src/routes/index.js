import { Router } from "express";
const router = Router();

import authRoute from "./auth.route.js";
import songRoute from "./song.route.js";

router.use("/auth", authRoute);
router.use("/song", songRoute);

export default router;