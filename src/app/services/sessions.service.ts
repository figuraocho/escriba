import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root',
})
export class SesionsService {

  sessionsChange: Subject<Session[]> = new Subject<Session[]>();
  actualCampaignId: number = -1;

  sessionsList: Session[] = [
    new Session("session1", 0,
      new Date('05/05/2021'),
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dictum velit. Maecenas nisi mauris, fermentum a bibendum vel, lobortis euismod lacus. Nulla massa nulla, efficitur porttitor ligula a, euismod sagittis magna. In fringilla, neque ut accumsan laoreet, ligula libero vestibulum arcu, a fermentum est felis tempor turpis. Donec vel velit facilisis, semper dui volutpat, ullamcorper ligula. Fusce id lectus commodo, semper libero eget, rhoncus purus. Nulla vitae tincidunt libero. Donec nisi enim, auctor in tristique nec, blandit quis nulla. Cras ultricies quam eget dictum vulputate. Donec sagittis ligula eget odio egestas, eu iaculis sem venenatis.`
    ),
    new Session("session2", 0,
      new Date('05/06/2021'),
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dictum velit. Maecenas nisi mauris, fermentum a bibendum vel, lobortis euismod lacus. Nulla massa nulla, efficitur porttitor ligula a, euismod sagittis magna. In fringilla, neque ut accumsan laoreet, ligula libero vestibulum arcu, a fermentum est felis tempor turpis. Donec vel velit facilisis, semper dui volutpat, ullamcorper ligula. Fusce id lectus commodo, semper libero eget, rhoncus purus. Nulla vitae tincidunt libero. Donec nisi enim, auctor in tristique nec, blandit quis nulla. Cras ultricies quam eget dictum vulputate. Donec sagittis ligula eget odio egestas, eu iaculis sem venenatis.`
    ),
    new Session( "session1", 1,
      new Date('05/07/2021'),
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dictum velit. Maecenas nisi mauris, fermentum a bibendum vel, lobortis euismod lacus. Nulla massa nulla, efficitur porttitor ligula a, euismod sagittis magna. In fringilla, neque ut accumsan laoreet, ligula libero vestibulum arcu, a fermentum est felis tempor turpis. Donec vel velit facilisis, semper dui volutpat, ullamcorper ligula. Fusce id lectus commodo, semper libero eget, rhoncus purus. Nulla vitae tincidunt libero. Donec nisi enim, auctor in tristique nec, blandit quis nulla. Cras ultricies quam eget dictum vulputate. Donec sagittis ligula eget odio egestas, eu iaculis sem venenatis.`
    ),
  ];

  constructor() {}

  getAllSessions(){
    return this.sessionsList.slice();
  }

  getCampaignSessions(){
    let selectedSessions: Session[] = [];
    this.sessionsList.forEach(ActualSession => {
      if (ActualSession.idCampaign === this.actualCampaignId) {selectedSessions.push(ActualSession)}
    });
    return selectedSessions.slice();
  }

  getSession(index:number){
    return this.sessionsList[index];
  }

  addSession(newSession:Session){
    newSession.idCampaign = this.actualCampaignId;
    this.sessionsList.push(newSession);
    this.sessionsChange.next(this.getCampaignSessions());
  }

  deleteSession(index:number){
    console.log("id a borrar: "+index);
    this.sessionsList.splice(index,1);
    this.sessionsChange.next(this.getCampaignSessions());
  }

  editSession(index:number, newData:Session){
    this.sessionsList[index]=newData;
    this.sessionsChange.next(this.getCampaignSessions());
  }

  setCampaign(campaignId: number){
    this.actualCampaignId = campaignId;
  }
}
