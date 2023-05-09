import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

import { ChatHistoryChatData } from "./ChatHistory.data.ts";
import { ChatMessageModel } from "./ChatHistory.model.ts";

export class ChatHistoryService {
  private dbChatHistory: ChatHistoryChatData;

  constructor(dbChatHistory: ChatHistoryChatData) {
    this.dbChatHistory = dbChatHistory;
  }

  public async listAllChatHistory() {
    const chatHistoryFromDb = await this.dbChatHistory.getChatHistory();
    const chatHistory = this.mapChatHistory(chatHistoryFromDb);

    return JSON.stringify(chatHistory);
  }

  private mapChatHistory(chatHistoryFromDb: ChatMessageModel[]) {
    return chatHistoryFromDb.map(
      (chatMessage: ChatMessageModel) => {
        if (chatMessage.type === "human") {
          return new HumanChatMessage(chatMessage.text);
        }
        return new SystemChatMessage(chatMessage.text);
      },
    );
  }
}
