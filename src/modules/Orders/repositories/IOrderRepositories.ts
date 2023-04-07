import { Order } from "../entities/Order";

export interface IOrderRepository {
  create(data: Order): Promise<void>;
}
