import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements OnInit {
  numColumnas: number = 0;

  //screenHeight: number = 0;
  //screenWidth: number = 0;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    //this.screenHeight = window.innerHeight;
    //this.screenWidth = window.innerWidth;
    this.numColumnas = Math.floor(window.innerWidth / 300);
  }

  ngOnInit(): void {}
}
