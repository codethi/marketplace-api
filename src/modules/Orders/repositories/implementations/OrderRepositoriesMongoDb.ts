import { Order } from "modules/Orders/entities/Order";
import { IOrderRepository } from "../IOrderRepositories";
import OrderSchema from "modules/Orders/schemas/OrderSchema";

export class OrderRepositoriesMongoDb implements IOrderRepository {
  async create(data: Order): Promise<void> {
    await OrderSchema.create(data);
  }
}
