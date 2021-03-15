import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Session } from '../session/session.model';
import { Subscription } from 'rxjs';
import { Campaign } from '../campaign.model';
import { CampaignService } from '../campaign.service';
import { SessionComponent } from '../session/session.component';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaignList: Campaign[] = [];
  private subscripcion!: Subscription;
  campaignForm!: FormGroup;
  campaignsLines!: HTMLCollection;

  constructor(private campaignService: CampaignService, private dialog: MatDialog) {}

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
    this.getCampaignLines();
  }

  getCampaignLines() {
    this.campaignsLines = document.getElementsByClassName('collapse');
  }

  onToggleContent(campaignIndex: number) {
    const campaignData = this.campaignsLines.item(campaignIndex)!;
    if (campaignData.className === 'collapse') {
      campaignData.className = 'collapse show';
    } else {
      campaignData.className = 'collapse';
    }
  }

  onDeleteCampaing(index: number) {
    this.campaignService.deleteCampaign(index);
  }

  onAddSession(campaignIndex: number) {
    const textElement = <HTMLInputElement>(
      document.getElementsByClassName('newSession')[campaignIndex]
    );
    this.campaignService.addSession(
      campaignIndex,
      new Date(),
      textElement.value
    );
  }

  openDialogSession(campaignIndex: number, sessionIndex: number) {
    const loadedSession: Session = this.campaignService.getSession(campaignIndex, sessionIndex);
    const dialogRef = this.dialog.open(SessionComponent, {
      data: { sessionData: loadedSession },
    });
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