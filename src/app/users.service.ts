import { Injectable } from '@angular/core';
import { User } from './user'
import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tick } from '@angular/core/src/render3';
import { reject } from 'q';

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
  loggedIn: boolean;

  constructor(
    private http: HttpClient
  ) { 
    this.loggedIn = false;
  }

  async checkUser(uName: string, pName: string): Promise<Object> {
    var data = {
      username: uName,
      password: pName
    }

    this.username = uName;
    
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'http://127.0.0.1:5000/LogIn';
      this.http.post(apiURL, data).toPromise().then((res : Response) =>{
        this.loggedIn = res;
        resolve();
      },
      msg =>{
        reject();
      })
    });

    return promise;
  }
}
