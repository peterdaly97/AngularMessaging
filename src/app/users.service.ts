import { Injectable } from '@angular/core';
import { User } from './user'
import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = USERS;
  username: string;

  constructor() { }

  checkUser(uName: string, pName: string) : boolean {

    for(var i = 0; i < this.users.length; i++) {
      if(this.users[i].username == uName && this.users[i].password == pName) {
        this.username = uName;
        return true;
      }
    }
    return false;
  }
}
