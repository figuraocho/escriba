import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import {
  Subscription
} from 'rxjs';
import {
  CampaignsService
} from 'src/app/services/campaings.service';
import {
  Campaign
} from '../campaign.model';
import {
  EditComponent
} from './edit/edit.component';

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

  modalEdit: Subscription = new Subscription();
  editedCampaign: Campaign = new Campaign();

  constructor(private campaignsService: CampaignsService, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  deleteCampaign() {
    this.campaignsService.removeCampaign(this.id);
  }

  editCampaign() {
    let dialog = this.matDialog.open(EditComponent, {
      height: '400px',
      width: '400px',
      data: {
        name: this.name,
        imagen: this.image,
        date: this.date,
        descripcion: this.description
      }
    });
    this.modalEdit = dialog.afterClosed().subscribe(result => {
      this.name = result.name;
      this.image = result.image;
      this.date = result.date;
      this.description = result.description;
    });
  }
}
