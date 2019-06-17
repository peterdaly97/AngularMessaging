import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  messages: Message[] = [];

  newMessage: string = '';

  id: number = 0;

  messageid: number = 0;

  message: Message = {id: this.messageid, owner: 'peter', message: ''};

  constructor() { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.messages = [
      { id: 0, owner: 'peter', message: 'How are you?' },
      { id: 1, owner: 'mike', message: 'Good, you?'}
    ]
  }

  addMessage() : void {
    this.message.message = this.newMessage;
    this.messages.push(this.message);
    this.messageid++;
    this.message = {id: this.messageid, owner: 'peter', message: ''};
    this.newMessage = '';
  }

}
