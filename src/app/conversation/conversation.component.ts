import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { Conversation } from '../conversation';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  conversation: Conversation = {
    id: 0,
    name: 'Chat Name',
    messages: []
  };
  
  newMessage: string = '';

  id: number = 0;

  messageid: number = 0;

  message: Message = {id: this.messageid, owner: 'peter', message: ''};

  constructor() { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.conversation.messages = [
      { id: 0, owner: 'peter', message: 'How are you?' },
      { id: 1, owner: 'mike', message: 'Good, you?'}
    ]
  }

  addMessage() : void {

    this.message.message = this.newMessage;
    this.conversation.messages.push(this.message);
    this.messageid++;
    this.message = {id: this.messageid, owner: 'peter', message: ''};
    this.newMessage = '';
  }

}
