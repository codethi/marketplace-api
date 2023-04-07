import { UserRepositoriesMongoDb } from "../../modules/Users/repositories/implementations/UserRepositoriesMongoDb";
import { IUserRepositories } from "../../modules/Users/repositories/IUserRepositories";
import { container } from "tsyringe";
import { IAuthRepositories } from "modules/Auth/repositpries/IAuthRepositories";
import { AuthRepositoriesMongoDb } from "modules/Auth/repositpries/implementations/AuthRepositoriesMongoDb";
import { ICategoriesRepository } from "modules/Categories/repositories/ICategoriesRepository";
import { CategoriesRepository } from "modules/Categories/repositories/implementations/CategoriesRepository";
import { IProductRepository } from "modules/Products/repositories/IProductRepository";
import { ProductRepository } from "modules/Products/repositories/implementations/ProductRepository";
import { IOrderRepository } from "modules/Orders/repositories/IOrderRepositories";
import { OrderRepositoriesMongoDb } from "modules/Orders/repositories/implementations/OrderRepositoriesMongoDb";

container.registerSingleton<IUserRepositories>(
  "UserRepositories",
  UserRepositoriesMongoDb
);

container.registerSingleton<IAuthRepositories>(
  "AuthRepositories",
  AuthRepositoriesMongoDb
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepositoriesMongoDb
);
