import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

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
    this.campaignList = this.campaignService.getCampaigns();
    this.subscripcion = this.campaignService.campaignsChange.subscribe(
      (campaignList: Campaign[]) => {
        this.campaignList = campaignList;
      }
    );
    this.campaignForm = new FormGroup({
      name: new FormControl(''),
      setting: new FormControl(''),
      system: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onDeleteCampaing(index: number) {
    this.campaignService.deleteCampaign(index);
  }

  onAddSession(campaignIndex: number) {
    const textElement = <HTMLInputElement>(
      document.getElementsByClassName('newSession')[campaignIndex]
    );
    this.campaignService.addSession(campaignIndex, textElement.value);
  }

  onDeleteSession(campaignIndex: number, sessionIndex: number) {
    this.campaignService.deleteSession(campaignIndex, sessionIndex);
  }

  onSubmit() {
    this.campaignService.addCampaign(this.campaignForm.value);
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
