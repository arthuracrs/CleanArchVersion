import { UserDto } from "./user.dto.js";

export interface UserDocument {
  userId: string;
  chatHistory: string;
}

export interface UserRepository {
  getsert(userId: string): Promise<UserDto>;
}
