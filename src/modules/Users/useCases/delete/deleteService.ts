import { User } from "modules/Users/entities/User";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

@injectable()
export class DeleteService {
  constructor(
    @inject("UserRepositories")
    private userRepositories: IUserRepositories
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepositories.findById(id);
    if (!user) throw new Error("User not found");

    await this.userRepositories.delete(id);
  }
}
