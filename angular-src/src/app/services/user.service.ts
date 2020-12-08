// import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  addUser(user: User) {
    // console.log('adding from services');
    // console.log(user);
    // const headers = { 'content-type': 'application/json' };
    // const body = JSON.stringify(user);
    // console.log(body);
    // console.log(this._http.post(this.usersUrl, user));
    //this.usersUrl, user, httpOptions
    return this.http.post(this.usersUrl, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
