import { Schema, model, Document } from 'mongoose';

interface IChatMessageDocument extends Document {
  id: string;
  text: string;
  type: string;
}

const ChatMessageDocumentSchema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  type: { type: String, required: true },
});

const ChatMessageDocument = model<IChatMessageDocument>('ChatMessageDocument', ChatMessageDocumentSchema);

export { ChatMessageDocument, IChatMessageDocument };
