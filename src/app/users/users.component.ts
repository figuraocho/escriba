import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
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

  @ViewChild('userForm') userFrm!: NgForm;

  public isLogin: boolean = true;
  public email: string = "";
  public password: string = "";

  constructor(private user: UsersService, private conection: ConectionService, private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  toggleSignIn() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(userData: {
    email: string,
    password: string
  }) {
    if (this.isLogin) {
      this.usersService.signIn(userData.email, userData.password).subscribe((output => {
          this.user.storeData({
            email: userData.email,
            password: userData.password,
            id: output.id,
            refreshToken: output.refreshToken,
            expiresIn: output.expiresIn
          });
          this.router.navigate(["/campaigns"]);
        }),
        (error => {
          if (error.error.error.message === "EMAIL_NOT_FOUND") {
            alert("The email do not exist in our database");
          } else {
            alert("There is a temporal problem in the servers, please try it later. (" + error.error.error.message + ")");
          }
          this.userFrm.resetForm();
        })
      );
    } else this.usersService.signUp(userData.email, userData.password).subscribe(
      (output => {
        this.user.storeData({
          email: this.email,
          password: this.password,
          id: output.id,
          refreshToken: output.refreshToken,
          expiresIn: output.expiresIn
        });
        this.router.navigate(["/campaigns"]);
      }),
      (error => {
        alert("There is a temporal problem in the servers, please try it later. (" + error.error.error.message + ")")
        console.log(error);
      })
    );
  }
}
