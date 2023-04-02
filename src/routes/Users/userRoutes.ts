import { Router } from "express";
import { UserRepositoriesMongoDb } from "modules/Users/repositories/implementations/UserRepositoriesMongoDb";
import { CreateController } from "modules/Users/useCases/create/createController";
import { CreateService } from "modules/Users/useCases/create/createService";

const userRoutes = Router();

const userRepository = new UserRepositoriesMongoDb();
const createService = new CreateService(userRepository);
const createController = new CreateController(createService);

userRoutes.post("/", (req, res) => createController.handle(req, res));

export default userRoutes;
