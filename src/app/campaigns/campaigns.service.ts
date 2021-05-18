import { Injectable } from '@angular/core';
import { CampaignModel } from './campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  campaigns: CampaignModel[] = [
    new CampaignModel(
      'Campaña1',
      new Date('05/05/2021'),
      'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa venenatis, condimentum
        elit
        nec, convallis orci.
        Morbi vehicula, metus vel interdum pretium, orci dui gravida quam, ac ullamcorper nisl lorem eget turpis.
        Praesent
        ac`
    ),
    new CampaignModel(
      'Campaña2',
      new Date('05/05/2021'),
      'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa venenatis, condimentum
        elit
        nec, convallis orci.
        Morbi vehicula, metus vel interdum pretium, orci dui gravida quam, ac ullamcorper nisl lorem eget turpis.
        Praesent
        ac`
    ),
    new CampaignModel(
      'Campaña3',
      new Date('05/05/2021'),
      'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa venenatis, condimentum
        elit
        nec, convallis orci.
        Morbi vehicula, metus vel interdum pretium, orci dui gravida quam, ac ullamcorper nisl lorem eget turpis.
        Praesent
        ac`
    ),
  ];

  constructor() { }
  
  getCampaigns() {
    return this.campaigns;
  }
}

