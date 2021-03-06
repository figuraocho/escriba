import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Session } from './session.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent implements OnInit {
  sessionDate = new FormControl('');
  sessionText = new FormControl('');

  constructor(@Inject(MAT_DIALOG_DATA) public data: { sessionData: Session }) {}

  ngOnInit(): void {
    console.log(this.data.sessionData.date);
    this.sessionDate.setValue(this.data.sessionData.date.toLocaleString());
    this.sessionText.setValue(this.data.sessionData.text);
  }
}