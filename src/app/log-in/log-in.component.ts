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
  loading: boolean;
  

  constructor(
    private userService: UsersService,
    private router: Router
  ) { 
    this.loading = false;
  }

  ngOnInit() {
    
  }

  logIn(event: Event): void {

    var result = false;

    this.username = event.target[0].value;
    this.password = event.target[1].value;
    this.loading = true;
    var response = this.userService.checkUser(
      this.username, this.password).then(
        () => this.changeScreen(response)
      );
  }


  changeScreen(res : Promise<object>) : void {
    this.loading = false;
    if(this.userService.loggedIn) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
