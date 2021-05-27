import { Component, Input, OnInit } from '@angular/core';
import { CampaignsService } from 'src/app/services/campaings.service';

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

  constructor(private campaignsService:CampaignsService) {}

  ngOnInit(): void {}

  deleteCampaign(){
    this.campaignsService.removeCampaign(this.id);
  }
}
