import { Order } from "modules/Orders/entities/Order";
import { IOrderRepository } from "../IOrderRepositories";
import OrderSchema from "modules/Orders/schemas/OrderSchema";

export class OrderRepositoriesMongoDb implements IOrderRepository {
  async create(data: Order): Promise<void> {
    await OrderSchema.create(data);
  }

  async findAll(limit: number, offset: number): Promise<Order[]> {
    return await OrderSchema.find().limit(limit).skip(offset);
  }

  async findById(id: string): Promise<Order | null> {
    return await OrderSchema.findById(id);
  }
  
}
