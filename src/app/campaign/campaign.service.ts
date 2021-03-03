import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Session } from './session/session.model';
import { Campaign } from './campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private campaignList: Campaign[] = [
    {
      name: 'Campaña1',
      id: 'a',
      setting: 'Fantasia',
      system: 'D&D5',
      description: 'Campaña del resugir del dragon',
      sessions: [
        { date: new Date('01/01/2021'), text: 'sesion 1 campaña 1' },
        { date: new Date('01/02/2021'), text: 'sesion 2 campaña 1' },
      ],
    },
    {
      name: 'Campaña2',
      id: 'b',
      setting: 'Sci-Fi',
      system: 'Shadowrun',
      description: 'A pegar tiros',
      sessions: [{ date: new Date('11/01/2021'), text: 'sesion 1 campaña 2' }],
    },
  ];

  campaignsChange = new Subject<Campaign[]>();

  public getCampaigns() {
    return this.campaignList.slice();
  }

  public getCampaign(id: string) {
    return this.campaignList.find((element) => element.id === id);
  }

  public addCampaign(campaign: Campaign) {
    console.log(campaign);
    this.campaignList.push(campaign);
    this.campaignsChange.next(this.campaignList.slice());
  }

  public deleteCampaign(index: number) {
    this.campaignList.splice(index, 1);
    this.campaignsChange.next(this.campaignList);
  }

  public addSession(campaignIndex: number, inputText: string) {
    const newSession = new Session(new Date, inputText);
    this.campaignList[campaignIndex].sessions?.push(newSession);
  }

  public deleteSession(campaignIndex: number, sessionIndex: number) {
    this.campaignList[campaignIndex].sessions?.splice(sessionIndex, 1);
    this.campaignsChange.next(this.campaignList);
  }

  public setCampaign() {
    // ... todo
  }
}
