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
}
