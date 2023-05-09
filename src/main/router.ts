import express from "express";
// import cors from 'cors'

import { expressControllerAdapter } from "./expressControllerAdapter.ts";

const router = express.Router();

router.get("/chat/history", expressControllerAdapter(ChatHistoryController));

export default router;
