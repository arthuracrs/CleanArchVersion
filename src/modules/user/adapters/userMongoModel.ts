import { Schema, model, Document } from 'mongoose';

interface IUserDocument extends Document {
  userId: string;
  chatHistory: string;
}

const UserDocumentSchema = new Schema({
  userId: { type: String, required: true },
  chatHistory: { type: String, required: true },
});

const UserDocument = model<IUserDocument>('UserDocument', UserDocumentSchema);

export { UserDocument, IUserDocument };
