import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Campaign } from './campaign.model';

import { CampaignComponent } from './campaign/campaign.component';
import { CampaignsService } from '../services/campaings.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
})

export class CampaignsComponent implements OnInit {
  numColumnas: number = 0;
  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignsService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.numColumnas = Math.floor(window.innerWidth / 300);
  }

  ngOnInit(): void {
    this.campaigns = this.campaignService.getCampaigns();
    this.campaignService.campaignsChange.subscribe((campignsList) => {
      this.campaigns = campignsList
    }
    );
  }
}
