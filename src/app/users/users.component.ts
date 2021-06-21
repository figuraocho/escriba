import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  RouterLink
} from '@angular/router';

import {
  ConectionService
} from '../services/conection.service';
import {
  UsersService
} from '../services/users.service';

export interface signUp {
  id: string;
  refreshToken: string;
  expiresIn: Date;
}

export interface signIn extends signUp {
  registered: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLogin: boolean = true;
  public email: string = "";
  public password: string = "";
  private id: string = "";
  private _token: string = "";
  private _tokenExpirationDate: Date = new Date();

  constructor(private conection: ConectionService, private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(userData: {
    email: string,
    password: string
  }) {
    if (this.isLogin) {
      this.usersService.signIn(userData.email, userData.password).subscribe((output => {
        this.id = output.id;
        this._tokenExpirationDate = new Date(new Date().getTime() + +output.expiresIn * 1000);
        this._token = output.refreshToken;
        console.log(this.id);
        console.log(this._tokenExpirationDate);
        console.log(this._token);
        this.router.navigate(["/campaigns"]);
      }));
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
