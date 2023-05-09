import {
  ChatMessageDocument,
  IChatMessageDocument,
} from "./ChatHistoryMongoModel.ts";
import { ChatHistoryRepository, ChatMessageDocumentDto } from "../core/ChatHistory.data.ts";

export class ChatMessageRepositoryImpl implements ChatHistoryRepository {
  async getAllChatMessages(): Promise<ChatMessageDocumentDto[]> {
    const chatMessageDocs = await ChatMessageDocument.find().lean().exec();
    return chatMessageDocs.map((chatMessageDoc) =>
      chatMessageDoc as IChatMessageDocument
    );
  }
}
