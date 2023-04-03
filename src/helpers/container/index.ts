import { UserRepositoriesMongoDb } from "../../modules/Users/repositories/implementations/UserRepositoriesMongoDb";
import { IUserRepositories } from "../../modules/Users/repositories/IUserRepositories";
import { container } from "tsyringe";
import { IAuthRepositories } from "modules/Auth/repositpries/IAuthRepositories";
import { AuthRepositoriesMongoDb } from "modules/Auth/repositpries/implementations/AuthRepositoriesMongoDb";

container.registerSingleton<IUserRepositories>(
  "UserRepositories",
  UserRepositoriesMongoDb
);

container.registerSingleton<IAuthRepositories>(
  "AuthRepositories",
  AuthRepositoriesMongoDb
);
