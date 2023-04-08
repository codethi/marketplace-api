import { Order } from "../entities/Order";

export interface IOrderRepository {
  create(data: Order): Promise<void>;
  findAll(limit: number, offset: number): Promise<Order[]>;
}
