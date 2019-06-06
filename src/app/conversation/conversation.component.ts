import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  messages: Message[] = [];

  title: string = "Name";

  id: number = 0;

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

}
