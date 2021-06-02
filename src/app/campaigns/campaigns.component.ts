import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Campaign } from './campaign.model';

import { CampaignsService } from '../services/campaings.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './campaign/edit/edit.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
})

export class CampaignsComponent implements OnInit {
  numColumnas: number = 0;
  campaigns: Campaign[] = [];
  newCampaign: Campaign = new Campaign();

  constructor(private campaignService: CampaignsService, private matDialog: MatDialog) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.numColumnas = Math.floor(window.innerWidth / 300);
  }

  ngOnInit(): void {
    this.campaigns = this.campaignService.getCampaigns();
    this.campaignService.campaignsChange.subscribe((campignsList) => {
      this.campaigns = campignsList;
    }
    );
  }

  addCampaign(){
      let dialog = this.matDialog.open(EditComponent, {
        height: '480px',
        width: '400px',
        data: {
          title:"Nueva Campaña",
          name: "",
          imagen: "",
          date: new Date(),
          descripcion: ""
        }
      });
      dialog.afterClosed().subscribe(result => {
        this.newCampaign.name = result.name;
        this.newCampaign.image = result.image;
        this.newCampaign.date = result.date;
        this.newCampaign.description = result.description;
        this.campaignService.addCampaign(this.newCampaign);
      });
  }
}
