import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Mark',
        lastName: 'Stevens',
        email: 'mstevens@smaz.us',
        hide: true,
      },
      {
        firstName: 'Harry',
        lastName: 'Potter',
        email: 'harry@hogwarts.edu',
        hide: true,
      },
      {
        firstName: 'Zadie',
        lastName: 'Stevens',
        email: 'zadiestevens@yahoo.com',
        hide: true,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
