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
  personalConvos: Conversation[] = [];

  constructor() { 
    
  }

  getConversations(uName : string) : Observable<Conversation[]> {
    this.personalConvos = [];
    for(var i = 0; i < this.convos.length; i++) {
      var memberList = this.convos[i].members;
      if(memberList.includes(uName)) {
        this.personalConvos.push(this.convos[i]);
      }
    }

    return of(this.personalConvos);
  }

  getMessages(id : number) : Observable<Message[]> {
    return of(this.convos.find(message => message.id === id).messages);
  }
}
