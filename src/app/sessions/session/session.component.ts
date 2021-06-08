import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionEditComponent } from './session-edit/session-edit.component';
import { SesionsService } from '../../services/sessions.service';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @Input() data: Session = new Session();
  
  constructor(private sessionsService:SesionsService, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  editSession(){
    let sessionCopy : Session =  Object.assign({}, this.data);
    const dialogRef = this.matDialog.open(SessionEditComponent,{width:'400px', height:'600px', data:{editedSession: sessionCopy, title:"Editar sesión"}});
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        this.sessionsService.editSession(result);
      }
    })
  }

  deleteSession(){
    this.sessionsService.deleteSession(this.data.id);
  }

}
