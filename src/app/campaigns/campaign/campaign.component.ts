import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements OnInit {
  @Input() id: number = -1;
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() date: Date = new Date();
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
