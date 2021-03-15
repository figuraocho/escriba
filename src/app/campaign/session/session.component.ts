import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { CampaignService } from '../campaign.service';

import { Session } from './session.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent implements OnInit {
  idCampaign: number = -1;
  idSession: number = -1;
  session = new Session(new Date,"");
  
  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {
    const route = new ActivatedRoute();
    this.idCampaign = route.snapshot.params['idCampaign'];
    console.log(this.idCampaign);
    this.idSession = route.snapshot.params['idSession'];
    console.log(this.idSession);
    this.session = this.campaignService.getSession(this.idCampaign, this.idSession);
    console.log(this.session);
  }
} 