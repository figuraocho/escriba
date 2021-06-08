import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Session } from '../../../models/session.model';

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.css']
})
export class SessionEditComponent implements OnInit {

  title: string = "Editar sesión"
  session: Session = new Session ();

  constructor(public dialogRef: MatDialogRef<SessionEditComponent>, @Inject(MAT_DIALOG_DATA) public data: {editedSession:Session, title:string}) {
    this.session = data.editedSession;
    this.title = data.title;
   }

  ngOnInit(): void {
  }

  onSubmit(){}

  save(){
    this.dialogRef.close(this.session);
  }

  cancel(){
    this.dialogRef.close();
  }

}