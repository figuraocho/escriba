import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @Input() date: string = "";
  @Input() text: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
