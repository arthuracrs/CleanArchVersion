import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

import { UserRepository } from "./user.repository.js";
import { UserDto } from "./user.dto.js";

export class UserService {
  private userRepository: UserRepository;

  constructor(dbChatHistory: UserRepository) {
    this.userRepository = dbChatHistory;
  }

  public async getsert(userId: string) {
    const userFromDb = await this.userRepository.getsert(userId);

    return JSON.stringify(userFromDb);
  }
}
