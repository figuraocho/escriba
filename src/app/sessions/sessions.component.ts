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
import {
  MatDialog
} from '@angular/material/dialog';
import {
  SessionEditComponent
} from './session/session-edit/session-edit.component';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit, OnDestroy {

  private idCampaign: number = -1;
  public sessionList: Session[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private sessionsService: SesionsService, private activatedRoute: ActivatedRoute, private matDialog: MatDialog) {}

  ngOnInit(): void {
    const output = this.activatedRoute.snapshot.paramMap.get('idCampaign');
    if (output !== null) {
      this.idCampaign = +output;
      this.sessionsService.setCampaign(this.idCampaign);
      this.sessionList = this.sessionsService.getCampaignSessions();
      this.subscription = this.sessionsService.sessionsChange.subscribe(
        newSessions => {
          this.sessionList = newSessions;
        }
      );
    } else {
      //todo gestion de errores
    }

  }

  addSession() {
    let newSession: Session = new Session();
    let dialogRef = this.matDialog.open(SessionEditComponent, {
      width: '400px',
      height: '600px',
      data: {
        editedSession: newSession,
        title: "Nueva sesión"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        result.idCampaign = this.idCampaign;
        this.sessionsService.addSession(result);
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
