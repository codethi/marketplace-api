import { Router } from "express";
import authMiddleware from "middlewares/authMiddleware";
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Users/useCases/create/createController";
import findByIdController from "modules/Users/useCases/finById/findByIdController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
import updateController from "modules/Users/useCases/update/updateController";
const userRoutes = Router();

userRoutes.post("/", createController.handle);

userRoutes.use(authMiddleware.execute);

userRoutes.get("/", paginationMiddleware.execute, findAllController.handle);
userRoutes.get("/:id", findByIdController.handle);
userRoutes.patch("/", updateController.handle);

export default userRoutes;
