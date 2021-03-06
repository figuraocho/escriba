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
        { date: new Date('01/02/2021'), text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt purus arcu, in imperdiet sem dignissim faucibus. Aliquam tempus ante malesuada, pharetra tellus consectetur, tristique purus. Aenean viverra commodo erat, ac cursus dui iaculis ut. Mauris semper in risus nec vestibulum. Aliquam at velit convallis lorem venenatis molestie ut nec justo. Mauris lacinia erat lacinia, interdum magna et, eleifend diam. Nunc tincidunt tristique risus ut vulputate. Nam vulputate sem et lacus elementum viverra sed sit amet lacus. Morbi ante eros, blandit ac orci eu, mollis feugiat dui. Proin ante neque, tempor porttitor convallis lobortis, vulputate quis tortor. Fusce commodo, magna id ornare condimentum, est neque porta odio, ac ultricies augue massa ut neque.

Proin ullamcorper, dui vel accumsan accumsan, metus neque consequat enim, eget scelerisque nisi purus non orci. Suspendisse laoreet sem at imperdiet mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec fringilla neque et ex luctus, vel blandit sapien eleifend. Vivamus nec fringilla dolor. Donec porttitor at quam a hendrerit. Vestibulum porttitor enim molestie, luctus libero a, lacinia purus. Fusce vel justo ligula. Aenean a varius justo. Sed vel vehicula velit, eu feugiat nulla. Phasellus convallis ligula sit amet nisi sollicitudin, nec accumsan magna viverra. Sed mi lectus, lacinia nec pellentesque eget, aliquam quis ex.

Morbi in eleifend neque. Sed sit amet nulla in dui semper mollis id ut lorem. Ut eget orci rhoncus, tempus sapien vitae, maximus purus. Morbi tincidunt consequat molestie. Donec quis lobortis tellus, et ultricies ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean lacinia justo metus, ac sodales nulla hendrerit eget. Integer id interdum nisl. Nunc pellentesque velit ac ligula elementum rutrum. Sed ac pellentesque massa, ut consectetur sem. Nam lacinia dignissim sapien, vitae elementum elit hendrerit quis. In nunc nisl, condimentum et est vitae, placerat hendrerit risus. Morbi a felis feugiat, hendrerit lectus non, dictum metus.

Donec in ex cursus, mollis tellus sit amet, laoreet arcu. Sed vehicula nisl in diam viverra ullamcorper vel id dui. Donec commodo enim eget massa blandit, sit amet fringilla dui pharetra. Mauris vel tristique nisl. Sed dictum non lectus nec mollis. Nunc laoreet porttitor ultricies. Nulla dapibus lacus ut justo pulvinar sagittis. Donec vel posuere elit, sed aliquam dui. Nunc viverra rutrum risus, et mollis ipsum lobortis id. Donec sodales faucibus dui, id accumsan nisl ultricies vel. Etiam fermentum est est, eu accumsan ipsum consequat et. Ut a fermentum arcu.

Curabitur aliquet, massa tempor tincidunt rutrum, ligula lectus fringilla est, et euismod mi ipsum sit amet ligula. Nullam eget tellus quis quam hendrerit imperdiet in at velit. Fusce semper lacus id dui pretium accumsan. Sed mauris lectus, tincidunt in quam eget, condimentum ornare felis. Pellentesque pulvinar ut turpis sodales posuere. Vivamus facilisis ex ut ipsum placerat ullamcorper. Nulla imperdiet nibh id augue suscipit, suscipit mollis nisi ultricies. Fusce sit amet erat id arcu pellentesque rhoncus quis quis turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu elementum est, in venenatis mauris. Donec at mi aliquet, pellentesque quam in, commodo elit. Maecenas vulputate imperdiet lectus id efficitur. Nam vitae pharetra nisl. Donec id sem elementum, pretium dui sit amet, dignissim sapien.` },
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

  public addSession(campaignIndex: number, date:Date, inputText: string) {
    const newSession = new Session(date, inputText);
    this.campaignList[campaignIndex].sessions?.push(newSession);
  }

  public getSession(campaignIndex:number, sessionIndex:number) {
    return this.campaignList[campaignIndex].sessions![sessionIndex];
  }

  public deleteSession(campaignIndex: number, sessionIndex: number) {
    this.campaignList[campaignIndex].sessions?.splice(sessionIndex, 1);
    this.campaignsChange.next(this.campaignList);
  }

  public setCampaign() {
    // ... todo
  }
}
