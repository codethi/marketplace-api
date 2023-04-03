import { Router } from "express";
import paginationMiddleware from "middlewares/paginationMiddleware";
import createController from "modules/Users/useCases/create/createController";
import findByIdController from "modules/Users/useCases/finById/findByIdController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
const userRoutes = Router();

userRoutes.post("/", createController.handle);
userRoutes.get("/", paginationMiddleware.execute, findAllController.handle);
userRoutes.get("/:id", findByIdController.handle);

export default userRoutes;
