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
  date: Date = new Date();
  text: string = "";

  constructor(public dialogRef: MatDialogRef<SessionEditComponent>, @Inject(MAT_DIALOG_DATA) public data: {date: Date, text: string}) {
    this.date = data.date;
    this.text = data.text;
   }

  ngOnInit(): void {
  }

  onSubmit(){}

  save(){
    const newSession = new Session("",-1,this.date, this.text);
    this.dialogRef.close(newSession);
  }

  cancel(){
    this.dialogRef.close();
  }

}