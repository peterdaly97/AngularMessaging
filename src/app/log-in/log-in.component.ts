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

    var result = false;

    this.username = event.target[0].value;
    this.password = event.target[1].value;
    
    var response = this.userService.checkUser(this.username, this.password);
    
    var data = response.subscribe(data => console.log(data));
    if(data) {
      this.router.navigateByUrl('/dashboard');
    }
    else {
      console.log('Failed');
    }
    
    
    
  }

}
