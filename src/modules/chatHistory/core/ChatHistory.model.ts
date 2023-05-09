export class ChatMessageModel {
  id: string;
  text: string;
  type: string;

  constructor(id: string, text: string, type: string) {
    this.id = id;
    this.text = text;
    this.type = type;
  }
}
