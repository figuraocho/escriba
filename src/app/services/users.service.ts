import { HttpClient } from "@angular/common/http";
import {
  Injectable
} from "@angular/core";
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

interface responseSignIn extends responseSignUp  {
  registered: boolean
}

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private http:HttpClient) {}

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
}
