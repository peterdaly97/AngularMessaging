import { Component, OnInit } from '@angular/core';
import { Conversation } from '../conversation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string = 'All Chats!'
  conversations: Conversation[];

  constructor() { }

  ngOnInit() {
    this.getConversations();
  }

  getConversations(): void {
    this.conversations = [
      { id: 0, name: 'Chat With Mike', messages: [] },
      { id: 1, name: 'Chat With Dave', messages: []}
    ]
  }

}
