import { User } from "modules/Users/entities/User";
import bcrypt, { hash } from "bcrypt";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { UserRepositoriesMongoDb } from "modules/Users/repositories/implementations/UserRepositoriesMongoDb";

export class CreateService {
  constructor(private userRepository: UserRepositoriesMongoDb) {}

  async execute(body: User): Promise<void> {
    const hashPassword = await bcrypt.hash(body.password, 10);

    const userExists = await this.userRepository.findByEmail(body.email);
    if (userExists) throw new Error("User already exists");

    await this.userRepository.create({ ...body, password: hashPassword });
  }
}
