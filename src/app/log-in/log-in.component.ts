import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username: string;
  password: string;
  

  constructor(
    private userService: UsersService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
  }

  logIn(event: Event): void {
    this.username = event.target.username.value;
    this.password = event.target.password.value;

    if(this.userService.checkUser(this.username, this.password)) {
      this.router.navigateByUrl('/dashboard');
    }
    else{
      console.log("Failed");
    }
    
  }

}
