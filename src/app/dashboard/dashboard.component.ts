import { Component, OnInit } from '@angular/core';
import { Conversation } from '../conversation';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string = 'All Chats!'
  conversations: Conversation[];

  constructor(
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.getConversations();
  }

  getConversations(): void {
    this.messageService.getConversations()
      .subscribe(conversations => this.conversations = conversations);
  }

}
