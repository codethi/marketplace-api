import { Router } from "express";
import authRouter from "./Auth/authRoutes";
import userRoutes from "./Users/userRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRouter);

export default router;
