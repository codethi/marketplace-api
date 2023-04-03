import { User } from "modules/Users/entities/User";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

@injectable()
export class UpdateService {
  constructor(
    @inject("UserRepositories")
    private userRepositories: IUserRepositories
  ) {}

  async execute(id: string, data: User): Promise<void> {
    const user = await this.userRepositories.findById(id);
    if (!user) throw new Error("User not found");

    if (!data.password) {
      await this.userRepositories.upadte(id, data);
    } else {
      const hashPassword = await bcrypt.hash(data.password, 10);
      await this.userRepositories.upadte(id, {
        ...data,
        password: hashPassword,
      });
    }
  }
}
