import { HttpClient } from "@angular/common/http";
import {
  Injectable, OnInit
} from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

import {
  environment
} from "../../environments/environment";


interface responseSignUp {
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
}

interface responseSignIn extends responseSignUp {
  registered: boolean
}

@Injectable({
  providedIn: "root"
})
export class UsersService{

  public email: string = "";
  public password: string = "";
  public id: string = "";
  private _token: string = "";
  private _tokenExpirationDate: Date = new Date();

  constructor(private http:HttpClient, private router: Router) {
    this.loadFromLocalStorage();
  }

  signIn(email:string, pass:string) {
     return this.http.post<responseSignIn>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + environment.firebaseApi, {email:email,password:pass, returnSecureToken:true})
     .pipe(map(response => {
      return {id:response.idToken, refreshToken:response.refreshToken, expiresIn:response.expiresIn, registered: response.registered}
    }));
  }

  signUp(email:string, pass:string) {
    return this.http.post<responseSignUp>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.firebaseApi, {email:email,password:pass, returnSecureToken:true} )
    .pipe(map(response => {
      return {id:response.idToken, refreshToken:response.refreshToken, expiresIn:response.expiresIn}
    }));
  }

  saveToLocalStorate() {
    localStorage.setItem('token', this._token);
    localStorage.setItem('tokenExpirationDate', this._tokenExpirationDate.toString());
    localStorage.setItem('id', this.id);
    localStorage.setItem('email', this.email);
  }

  loadFromLocalStorage() {
    const userToken: string | null = localStorage.getItem('token');
    const tokenExpirationDate:string | null = localStorage.getItem('tokenExpirationDate');
    const id : string | null = localStorage.getItem('id');
    const email: string | null = localStorage.getItem('email');

    if (userToken && tokenExpirationDate && id && email) {
      this._token = userToken;
      this._tokenExpirationDate = new Date(tokenExpirationDate);
      this.email = email;
      this.id = id;
      this.router.navigate(['/campaigns'])
    }
  }

  storeData(userData: {
    email:string,
    password:string,
    id: string,
    refreshToken: string,
    expiresIn: string
  }) {
    this.email = userData.email;
    this.id = userData.id;
    this._tokenExpirationDate = new Date(new Date().getTime() + +userData.expiresIn * 1000);
    this._token = userData.refreshToken;
    this.saveToLocalStorate();
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
