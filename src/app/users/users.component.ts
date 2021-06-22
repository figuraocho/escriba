import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
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

  public isLogin: boolean = true;
  public email: string = "";
  public password: string = "";
  public id: string = "";
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
        this.storeData(output);
        this.router.navigate(["/campaigns"]);
      }));
    } else this.usersService.signUp(userData.email, userData.password).subscribe(
      (output => {
        this.storeData(output);
        this.router.navigate(["/campaigns"]);
      })
    );
  }

  storeData(userData:{id:string, refreshToken:string, expiresIn:string}){
    this.id = userData.id;
    this._tokenExpirationDate = new Date(new Date().getTime() + +userData.expiresIn * 1000);
    this._token = userData.refreshToken;
    this.saveToLocalStorate();
  }

  saveToLocalStorate() {
    localStorage.setItem('token', this._token);
    localStorage.setItem('tokenExpirationDate', this._tokenExpirationDate.toString());
    localStorage.setItem('id', this.id);
    localStorage.setItem('email', this.email);
  }

  loadFromLocalStorage(){
    const userToken:string | null = localStorage.getItem('token');
    if (!userToken){
      return;
    }
    this._token = userToken;
    //this.email = localStorage.getItem('email');

  }

  toggleSignIn() {
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
