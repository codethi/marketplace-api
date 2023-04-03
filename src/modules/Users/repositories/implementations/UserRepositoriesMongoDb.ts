import { User } from "modules/Users/entities/User";
import UserSchema from "modules/Users/schemas/UserSchema";
import { IUserRepositories } from "../IUserRepositories";

export class UserRepositoriesMongoDb implements IUserRepositories {
  async create(body: User): Promise<void> {
    await UserSchema.create(body);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await UserSchema.findOne({ email });
    return user;
  }

  async findAll(limit: number, offset: number): Promise<User[]> {
    return await UserSchema.find()
      .select(["-password", "-__v"])
      .limit(limit)
      .skip(offset);
  }

  async findById(id: string): Promise<User | null> {
    const user = await UserSchema.findById(id).select(["-password", "-__v"]);
    return user;
  }
}
