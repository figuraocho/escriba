import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  CampaignsComponent
} from './campaigns/campaigns.component';
import {
  SessionsComponent
} from './sessions/sessions.component';
import {
  AuthGuard
} from './users/auth.guard';
import {
  UsersComponent
} from './users/users.component';

const routes: Routes = [{
    path: "",
    component: UsersComponent
  },
  {
    path: "campaigns",
    component: CampaignsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sessions/:idCampaign",
    component: SessionsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
