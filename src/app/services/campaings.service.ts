import { Injectable } from '@angular/core';
import { Campaign } from '../campaigns/campaign.model';

@Injectable({ providedIn: 'root' })
export class CampaignsService {
  campaigns: Campaign[] = [
    {
      name: 'campaign1',
      date: new Date('5/5/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.

Aenean at lobortis justo, malesuada blandit diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam pellentesque orci massa, eu dapibus felis malesuada id. Praesent dignissim eros eu faucibus pharetra. Nulla in lectus vitae magna vulputate lobortis. Praesent elementum ligula a diam vulputate faucibus. Aliquam erat volutpat. Etiam libero sem, condimentum ut aliquet eu, sollicitudin sit amet tortor.`,
    },
    {
      name: 'campaign2',
      date: new Date('7/10/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet`,
    },
    {
      name: 'campaign3',
      date: new Date('8/3/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.

Aenean at lobortis justo, malesuada blandit diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam pellentesque orci massa, eu dapibus felis malesuada id. Praesent dignissim eros eu faucibus pharetra. Nulla in lectus vitae magna vulputate lobortis. Praesent elementum ligula a diam vulputate faucibus. Aliquam erat volutpat. Etiam libero sem, condimentum ut aliquet eu, sollicitudin sit amet tortor.`,
    },
    {
      name: 'campaign4',
      date: new Date('6/17/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.

Aenean at lobortis justo, malesuada blandit diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam pellentesque orci massa, eu dapibus felis malesuada id. Praesent dignissim eros eu faucibus pharetra. Nulla in lectus vitae magna vulputate lobortis. Praesent elementum ligula a diam vulputate faucibus. Aliquam erat volutpat. Etiam libero sem, condimentum ut aliquet eu, sollicitudin sit amet tortor.`,
    },
    {
      name: 'campaign5',
      date: new Date('11/6/2020'),
      image:
        'https://mocah.org/uploads/posts/4514751-warrior-knight-fantasy-art-sword-medieval-armor.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tortor non magna lacinia eleifend. Curabitur tempor egestas accumsan. In placerat risus a massa auctor congue. Nulla aliquam, arcu interdum porttitor sagittis, nibh ante lobortis sem, ut rutrum felis nisi non ante. Etiam finibus risus lectus, ac blandit ex viverra laoreet. Ut imperdiet rutrum dignissim. Aliquam sit amet vestibulum orci. Phasellus eleifend fermentum enim, sed venenatis sem. Pellentesque fringilla nunc a risus aliquet, non laoreet orci vehicula. Pellentesque sit amet mauris orci.

Aenean at lobortis justo, malesuada blandit diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam pellentesque orci massa, eu dapibus felis malesuada id. Praesent dignissim eros eu faucibus pharetra. Nulla in lectus vitae magna vulputate lobortis. Praesent elementum ligula a diam vulputate faucibus. Aliquam erat volutpat. Etiam libero sem, condimentum ut aliquet eu, sollicitudin sit amet tortor.`,
    },
  ];

  getCampaigns() {
    return this.campaigns.slice();
  }

  getCampaign(index: number) {
    return this.campaigns[index];
  }

  addCampaign(campaign: Campaign) {
    this.campaigns.push(campaign);
  }

  removeCampaign(index: number) {
    this.campaigns.splice(index, 1);
  }
}