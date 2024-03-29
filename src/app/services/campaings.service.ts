import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Campaign } from '../models/campaign.model';
import { ConectionService } from './conection.service';

@Injectable({ providedIn: 'root' })
export class CampaignsService {

  campaignsChange:Subject<Campaign[]> = new Subject<Campaign[]>();

  campaignsList: Campaign[] = [];
  /* campaignsList: Campaign[] = [
    {
      DataBaseId: 'campaign1',
      name: 'campaign1',
      date: new Date('5/5/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.`,
    },
    {
      DataBaseId: "campaign2",
      name: 'campaign2',
      date: new Date('7/10/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet`,
    },
    {
      DataBaseId: 'campaign3',
      name: 'campaign3',
      date: new Date('8/3/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.`,
    },
    {
      DataBaseId: 'campaign4',
      name: 'campaign4',
      date: new Date('6/17/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.`,
    },
    {
      DataBaseId: 'campaign5',
      name: 'campaign5',
      date: new Date('11/6/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.`,
    },
  ]; */

  constructor(private conection:ConectionService){}

  getCampaigns() {
    if (this.campaignsList.length === 0){
      this.campaignsList = this.conection.getCampaigns();
    }
    return this.campaignsList.slice();
  }

  getCampaign(index: number) {
    return this.campaignsList[index];
  }

  addCampaign(campaign: Campaign) {
    this.campaignsList.push(campaign);
    this.campaignsChange.next(this.campaignsList.slice());
  }

  removeCampaign(index: number) {
    this.campaignsList.splice(index, 1);
    this.campaignsChange.next(this.campaignsList.slice());
  }

  editCampaign(index:number,newData:Campaign){
    this.campaignsList[index] = newData;
    this.campaignsChange.next(this.campaignsList);
  }
}