import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../services/conection.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLogin: boolean = true;

  constructor(private conection:ConectionService) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  toggle(){
    this.isLogin = !this.isLogin;
  }

  launchProcess(){
    this.conection.saveData();
  }
}
