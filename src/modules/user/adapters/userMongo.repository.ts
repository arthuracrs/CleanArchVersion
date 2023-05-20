import { UserDocument } from "./userMongoModel.js";
import { UserRepository } from "../core/user.repository.js";
import { UserDto } from "../core/user.dto.js";

export class UserRepositoryImpl implements UserRepository {
  public async getsert(userId: string): Promise<UserDto> {
    const user = await UserDocument.findOneAndUpdate(
      { userId },
      { $set: { userId } },
      { upsert: true, new: true },
    );

    return user;
  }
}
