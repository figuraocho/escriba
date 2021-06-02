import { Component, OnInit } from '@angular/core';
import { Session } from './session.model';
import { SesionsService } from '../services/sessions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  public sessionList:Session[] = [];
  private subscription:Subscription = new Subscription();

  constructor(private sessionService:SesionsService ) { }

  ngOnInit(): void {
    this.sessionList = this.sessionService.getSessions();
    this.subscription = this.sessionService.sessionsChange.subscribe(
      newSessions => this.sessionList = newSessions
    )
  }

}
