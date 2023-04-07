import { Router } from "express";
import authRouter from "./Auth/authRoutes";
import userRoutes from "./Users/userRoutes";
import categoryRouter from "./Category/categoryRoutes";
import productRouter from "./Product/productRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRouter);
router.use("/categories", categoryRouter);
router.use("/products", productRouter);

export default router;
