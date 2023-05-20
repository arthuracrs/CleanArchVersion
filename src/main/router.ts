import express from "express";
// import cors from 'cors'

import { expressControllerAdapter } from "./expressControllerAdapter.js";

import {UserMiddleware} from "./middleware/user.middleware.js"

import { chatHistoryController } from "../modules/chatHistory/index.js";

const router = express.Router();

router.post("/webhook" , UserMiddleware.handle, expressControllerAdapter(chatHistoryController.handleListAllChatHistory));

export default router;
