import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path: '', redirectTo: '/logIn', pathMatch: 'full'},
  { path: 'convo/:id', component: ConversationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'logIn', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
