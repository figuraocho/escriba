import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Session
} from '../models/session.model';
import {
  SesionsService
} from '../services/sessions.service';
import {
  Subscription
} from 'rxjs';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit, OnDestroy {

  private idCampaign: number = -1;
  public sessionList: Session[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private sessionService: SesionsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const output = this.activatedRoute.snapshot.paramMap.get('idCampaign');
    if (output !== null) {
      this.idCampaign = +output;
    }
    this.sessionService.setCampaign(this.idCampaign);
    this.sessionList = this.sessionService.getCampaignSessions();
    this.subscription = this.sessionService.sessionsChange.subscribe(
      newSessions => {
        this.sessionList = newSessions;
        //console.log(this.sessionList);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
