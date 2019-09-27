import { Component, OnInit } from '@angular/core';
import { Conversation } from '../conversation';
import {MessagesService} from '../messages.service';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string = 'All Chats!'
  conversations: Conversation[];

  constructor(
    private messageService: MessagesService,
    private uService: UsersService
  ) { }

  ngOnInit() {
    this.getConversations();
  }

  getConversations(): void {
    this.conversations = [];
    this.messageService.getConversations(this.uService.username)
      .subscribe(conversations => this.conversations = conversations);
  }

}
