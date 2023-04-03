import { UserRepositoriesMongoDb } from "../../modules/Users/repositories/implementations/UserRepositoriesMongoDb";
import { IUserRepositories } from "../../modules/Users/repositories/IUserRepositories";
import { container } from "tsyringe";

container.registerSingleton<IUserRepositories>(
  "UserRepositories",
  UserRepositoriesMongoDb
);
