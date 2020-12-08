import { UserService } from '../../services/user.service';
import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class UserComponent implements OnInit {
  //Properties
  user: User = {
    name: '',
    username: '',
    password: '',
  };
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  //Methods
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    console.log('on submit called');
    if (!valid) {
      console.log('Form is not valid');
    } else {
      console.log('submiting from compotnent');
      console.log('hidden');
      console.log(value);
      this._userService.addUser(value);
      console.log('service done');
      this.form.reset();
    }
  }
}
