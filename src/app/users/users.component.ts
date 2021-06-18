import {
  Component,
  OnInit
} from '@angular/core';

import {
  ConectionService
} from '../services/conection.service';
import {
  UsersService
} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLogin: boolean = true;
  public email: string = "";
  public password: string = "";
  private _token: string = "";
  private _tokenExpirationDate: Date = new Date();

  constructor(private conection: ConectionService, private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit(userData: {
    email: string,
    password: string
  }) {
    if (this.isLogin) {
      console.log(this.usersService.signIn(userData.email, userData.password).subscribe());
    } else console.log(this.usersService.signUp(userData.email, userData.password).subscribe());
  }

  toggle() {
    this.isLogin = !this.isLogin;
  }

  saveData() {
    this.conection.getSessions();
  }

  loadData() {
    this.conection.getCampaigns();
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
