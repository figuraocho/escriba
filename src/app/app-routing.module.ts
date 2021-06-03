import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: "", component: CampaignsComponent },
  { path: "sessions/:idCampaign", component: SessionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
