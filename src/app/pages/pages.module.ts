import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';

import { LeaveModule } from './leave/leave.module';
import { EventsModule } from './events/events.module';
import { ContractModule } from './contract/contract.module';
import { AddContractComponent } from './contract/addcontract.component';
import { AddJobComponent } from './profile/addjob.component';
import { InterviewComponent } from './profile/interview.component';
import { TrainingComponent } from './profile/training.component';
import { AddProjectComponent } from './profile/addproject.component';


import { AdDeptComponent } from './events/addept.component';

import { PagesRoutingModule } from './pages-routing.module';
import { PayrollModule } from './payroll/payroll.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    PayrollModule,
    ContractModule,
    EventsModule,
    LeaveModule,
    ProfileModule,
    // Ng2SmartTableModule,
  ],
  declarations: [
    PagesComponent,
    AddContractComponent,
    AdDeptComponent,
    AddJobComponent,
    InterviewComponent,
    TrainingComponent,
    AddProjectComponent,
  ],
})
export class PagesModule {
}
