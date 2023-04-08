import { container } from "tsyringe";

import { UserRepositoriesMongoDb } from "../../modules/Users/repositories/implementations/UserRepositoriesMongoDb";
import { IUserRepositories } from "../../modules/Users/repositories/IUserRepositories";

import { AuthRepositoriesMongoDb } from "../../modules/Auth/repositpries/implementations/AuthRepositoriesMongoDb";
import { IAuthRepositories } from "../../modules/Auth/repositpries/IAuthRepositories";

import { CategoriesRepository } from "../../modules/Categories/repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/Categories/repositories/ICategoriesRepository";

import { ProductRepository } from "../../modules/Products/repositories/implementations/ProductRepository";
import { IProductRepository } from "../../modules/Products/repositories/IProductRepository";

import { OrderRepositoriesMongoDb } from "../../modules/Orders/repositories/implementations/OrderRepositoriesMongoDb";
import { IOrderRepository } from "../../modules/Orders/repositories/IOrderRepositories";

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
