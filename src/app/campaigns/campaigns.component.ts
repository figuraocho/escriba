import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

import { CampaignComponent } from './campaign/campaign.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
})
  
export class CampaignsComponent implements OnInit {
  numColumnas: number = 0;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.numColumnas = Math.floor(window.innerWidth / 300);
  }

  ngOnInit(): void {}
}
