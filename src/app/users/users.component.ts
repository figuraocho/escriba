import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLogin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  toggle(){
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  }

}
