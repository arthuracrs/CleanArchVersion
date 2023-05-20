export class UserDto {
  userId: string;
  chatHistory: string

  constructor(userId: string, chatHistory: string) {
    this.userId = userId;
    this.chatHistory = chatHistory;
  }
}
