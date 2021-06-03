import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionEditComponent } from './session-edit/session-edit.component';
import { SesionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @Input() id: number = -1;
  @Input() date: Date = new Date();
  @Input() text: string = "";
  
  constructor(private sessionsService:SesionsService, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  editSession(){
    const dialogRef = this.matDialog.open(SessionEditComponent,{width:'400px', height:'600px', data:{date: this.date, text: this.text}});
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        this.sessionsService.editSession(this.id, result);
      }
    })
  }

  deleteSession(){
    this.sessionsService.deleteSession(this.id);
  }

}
