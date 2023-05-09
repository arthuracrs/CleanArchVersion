import {ChatHistoryService} from "../modules/chatHistory/core/ChatHistory.service.ts"

import {ChatHistoryController} from "../modules/chatHistory/presenters/ChatHistory.controller.ts"

export const di = {
    chatHistoryController: new ChatHistoryController(new ChatHistoryService()),
}
