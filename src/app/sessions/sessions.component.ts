import { Component, OnDestroy, OnInit } from '@angular/core';
import { Session } from '../models/session.model';
import { SesionsService } from '../services/sessions.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit, OnDestroy {

  private idCampaign: number = -1;
  public sessionList:Session[] = [];
  private subscription:Subscription = new Subscription();

  constructor(private sessionService:SesionsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sessionList = this.sessionService.getSessions();
    this.subscription = this.sessionService.sessionsChange.subscribe(
      newSessions => this.sessionList = newSessions
    )

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
