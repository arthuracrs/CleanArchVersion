import { ChatMessageModel } from "./ChatHistory.model.js";

export interface ChatMessageDocumentDto {
  id: string;
  text: string;
  type: string;
}

export interface ChatHistoryRepository {
  getAllChatMessages(): Promise<ChatMessageDocumentDto[]>;
}

export class ChatHistoryChatData {
  private chatHistoryRepository: ChatHistoryRepository;

  constructor(chatHistoryRepository: ChatHistoryRepository) {
    this.chatHistoryRepository = chatHistoryRepository;
  }

  public async getChatHistory(): Promise<ChatMessageModel[]> {
    const chatHistoryList = await this.chatHistoryRepository
      .getAllChatMessages();

    return chatHistoryList.map((chatHistoryItem) => {
      return new ChatMessageModel(
        chatHistoryItem.id,
        chatHistoryItem.text,
        chatHistoryItem.type,
      );
    });
  }
}
