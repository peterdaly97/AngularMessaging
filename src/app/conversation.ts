import { Message } from './message';

export class Conversation {
    id: number;
    name: string;
    members: string[];
    messages: Message[];
  }