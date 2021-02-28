import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Campaign as Campaign } from './campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private campaignList = [
    {
      name: 'Campaña1',
      id: 1,
      setting: 'Fantasia',
      system: 'D&D5',
      description: 'Campaña del resugir del dragon',
    },
    {
      name: 'Campaña2',
      id: 2,
      setting: 'Sci-Fi',
      system: 'Shadowrun',
      description: 'A pegar tiros',
    },
  ];

  campaignsChange = new Subject<Campaign[]>();
  
  public getCampaings() {
    return this.campaignList.slice();
  }

  public getCampaign(id: number) {
    return this.campaignList.find(element => element.id === id);
  }

  public addCampaign(campaign: Campaign) {
    console.log(campaign);
    this.campaignList.push(campaign);
    this.campaignsChange.next(this.campaignList.slice());
  }

  public setCampaign() {
    // ... todo
  }
}
