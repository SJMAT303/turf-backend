import express from "express";
import managerRoutes from "./manager/index.js";
import userRoutes from "./user/index.js";
import turfRoutes from "./turf/index.js";
import imageRoutes from "./image/index.js";
const router = express.Router();

router.use("/manager", managerRoutes);
router.use("/user", userRoutes);
router.use("/turf", turfRoutes);
router.use("/upload", imageRoutes);

export default router;
