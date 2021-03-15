import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list.component';

import { CampaignComponent } from './campaign/campaign.component'
import { SessionComponent } from './campaign/session/session.component'

const routes: Routes = [
  {
    path: 'campaign',
    component: CampaignComponent,
    children: [
      { path: 'campaign-list', component: CampaignListComponent },
      { path: 'session/:idCampaign/:idSession', component: SessionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
