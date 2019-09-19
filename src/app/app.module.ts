import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationComponent } from './conversation/conversation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    DashboardComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
