import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayrollComponent } from './payroll/payroll.component';

import { ProfileComponent } from './profile/profile.component';

import { LeaveComponent } from './leave/leave.component';
import { EventsComponent } from './events/events.component';
import { ContractComponent } from './contract/contract.component';
import { AddContractComponent } from './contract/addcontract.component';
import { AddJobComponent } from './profile/addjob.component';
import { InterviewComponent } from './profile/interview.component';
import { TrainingComponent } from './profile/training.component';
import { AddProjectComponent } from './profile/addproject.component';

import { AdDeptComponent } from './events/addept.component';

import { AddLeaveComponent } from './leave/addleave.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'payroll',
      component: PayrollComponent,
    },
    {
      path: 'leave',
      component: LeaveComponent,
    },
    {
      path: 'contract',
      component: ContractComponent,
    },
    {
      path: 'addcontract',
      component: AddContractComponent,
    },
    {
      path: 'interview',
      component: InterviewComponent,
    },
     {
      path: 'addproject',
      component: AddProjectComponent,
    },
    {
      path: 'training',
      component: TrainingComponent,
    },
    {
      path: 'addjob',
      component: AddJobComponent,
    },
    {
      path: 'addept',
      component: AdDeptComponent,
    },
    {
      path: 'addleave',
      component: AddLeaveComponent,
    },
    {
      path: 'events',
      component: EventsComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
