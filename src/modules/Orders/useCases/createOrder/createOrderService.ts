import { NotFoundError } from "helpers/errors/apiErrors";
import { Order } from "modules/Orders/entities/Order";
import { IOrderRepository } from "modules/Orders/repositories/IOrderRepositories";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateOrderService {
  constructor(
    @inject("OrderRepository")
    private orderRepository: IOrderRepository
  ) {}

  async execute(_id: ObjectId, data: Order): Promise<void> {
    const order = { ...data, user_id: _id };
    await this.orderRepository.create(order);
  }
}
