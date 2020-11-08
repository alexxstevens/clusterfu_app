import { BookmarkService } from '../../services/bookmark.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  //Properties
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  //Methods
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.hide = true;
      this._userService.addUser(value);
      this.form.reset();
    }
  }
}
