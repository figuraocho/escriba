import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Campaign } from './campaign.model';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements OnInit, OnDestroy {
  campaignList: Campaign[] = [];
  private subscripcion!: Subscription;
  campaignForm!: FormGroup;

  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {
    this.campaignList = this.campaignService.getCampaings();
    this.subscripcion = this.campaignService.campaignsChange.subscribe(
      (campaignList: Campaign[]) => {
        this.campaignList = campaignList;
      }
    );
    this.campaignForm = new FormGroup({
      name: new FormControl(""),
      setting: new FormControl(""),
      system: new FormControl(""),
      description: new FormControl("")
    });
  }

  onSubmit() {
    this.campaignService.addCampaign(this.campaignForm.value);
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
