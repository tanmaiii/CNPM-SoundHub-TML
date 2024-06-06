import { Router } from "express";
const router = Router();

import authRoute from "./auth.route.js";
import songRoute from "./song.route.js";
import searchRoute from "./search.route.js";
import songPlay from "./songPlay.route.js";

router.use("/auth", authRoute);
router.use("/song", songRoute);
router.use("/search", searchRoute);
router.use("/songPlay", songPlay);

export default router;
