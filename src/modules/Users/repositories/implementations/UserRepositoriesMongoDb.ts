import { Address } from "modules/Users/entities/Address";
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

  async upadte(id: string, data: User): Promise<void> {
    await UserSchema.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<void> {
    await UserSchema.findByIdAndRemove(id);
  }

  async addNewAddress(userId: string, address: Address): Promise<void> {
    await UserSchema.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $push: {
          addresses: address,
        },
      }
    );
  }

  async findAddressById(
    addressId: string,
    userId: string
  ): Promise<Address | null> {
    return await UserSchema.findOne(
      { _id: userId, "addresses._id": addressId },
      { "addresses.$": 1 }
    );
  }

  async removeAddress(userId: string, addressId: string): Promise<void> {
    await UserSchema.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $pull: {
          addresses: {
            _id: addressId,
          },
        },
      }
    );
  }
}
