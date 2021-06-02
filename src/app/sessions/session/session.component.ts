import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor(private sessionsService:SesionsService) { }

  ngOnInit(): void {
  }

  editSession(){
    //abrir modal
  }

  deleteSession(){
    this.sessionsService.deleteSession(this.id);
  }

}
