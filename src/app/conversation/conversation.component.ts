import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { Conversation } from '../conversation';
import {MessagesService} from '../messages.service';
import {UsersService} from '../users.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  conversation: Conversation = {
    id: 0,
    name: 'Chat Name',
    members: [],
    messages: []
  };
  
  newMessage: string = '';

  id: number = 0;

  messageid: number = 0;

  message: Message = {id: this.messageid, owner: this.uService.username, message: ''};

  constructor(
    private messageService: MessagesService,
    private uService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.messageService.getMessages(id)
    .subscribe(messages => this.conversation.messages = messages);
  }

  addMessage() : void {

    this.message.message = this.newMessage;
    this.conversation.messages.push(this.message);
    this.messageid++;
    this.message = {id: this.messageid, owner: 'peter', message: ''};
    this.newMessage = '';
  }

}
