import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable, of } from 'rxjs';
import { Conversation } from './conversation';
import { CONVERSATIONS } from './mock-conversations';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  convos: Conversation[] = CONVERSATIONS;

  constructor() { 
    
  }

  getConversations() : Observable<Conversation[]> {
    return of(this.convos);
  }

  getMessages(id : number) : Observable<Message[]> {
    return of(this.convos.find(message => message.id === id).messages);
  }
}
