import { Request, Response } from "../../../interfaces/Presenters.js";
import { ChatHistoryService } from "../core/ChatHistory.service.js";

export class ChatHistoryController {
  chatHistoryService: ChatHistoryService;

  constructor(chatHistoryService: ChatHistoryService) {
    this.chatHistoryService = chatHistoryService;
  }

  public async handleListAllChatHistory(request: Request): Promise<Response> {
    const { queryParameters, pathParameters, body } = request;
    const { userId } = pathParameters;
    const { message } = body;

    const response: Response = {
      statusCode: 200,
      body: {
        message: "",
      },
    };

    // const response: Response = {
    //   statusCode: 200,
    //   body: {
    //     message: JSON.stringify(
    //       await this.chatHistoryService.listAllChatHistory(),
    //     ),
    //   },
    // };

    return response;
  }
}
