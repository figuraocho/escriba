import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmit(ngForm:NgForm){
    console.log(ngForm);
    
  }

  toggle(){
    this.isLogin = !this.isLogin;
  }

  saveData(){
    this.conection.getSessions();
  }
  
  loadData(){
    this.conection.getCampaigns();
  }
}
