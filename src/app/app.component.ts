import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignsService } from './services/campaings.service';
import { ConectionService } from './services/conection.service';
import { SessionsService } from './services/sessions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escriba';

  constructor(private router:Router, private conection:ConectionService, private campaigns:CampaignsService, private sessions:SessionsService){}

  logout(){
    localStorage.clear();
    this.router.navigate(["/"]);
  }
  saveData(){
    this.conection.saveData(this.campaigns.getCampaigns(), this.sessions.getAllSessions());
  }
}