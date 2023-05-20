import { ChatHistoryService } from "./core/ChatHistory.service.js";
import { ChatMessageRepositoryImpl } from "./adapters/ChatHistoryMongo.repository.js";
import { ChatHistoryChatData } from "./core/ChatHistory.data.js";
import { ChatHistoryController } from "./presenters/ChatHistory.controller.js";

const chatMessageRepositoryImpl = new ChatMessageRepositoryImpl();
const chatHistoryChatData = new ChatHistoryChatData(chatMessageRepositoryImpl);
const chatHistoryService = new ChatHistoryService(chatHistoryChatData);
const chatHistoryController = new ChatHistoryController(chatHistoryService);

export { chatHistoryController, chatHistoryService };
