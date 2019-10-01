import { Injectable } from '@angular/core';
import { User } from './user'
import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { tick } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  users: User[] = USERS;
  username: string;
  serverData: Object;

  constructor(
    private http: HttpClient
  ) { }

  checkUser(uName: string, pName: string): Observable<Object> {
    var data = {
      username: uName,
      password: pName
    }

    this.username = uName;

    const promise = this.http.post('http://127.0.0.1:5000/LogIn',
     data).subscribe(
       data => { 

         this.serverData = data;
        }
     );
    return of(this.serverData);
  }
}
