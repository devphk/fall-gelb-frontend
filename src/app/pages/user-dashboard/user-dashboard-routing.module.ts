import { NgModule } from '@angular/core';
import { RouterModule, 
         Routes } from '@angular/router';
import { HomeComponent,
         PersonalInformationComponent, 
         SecurityComponent } from './components';
import { UserDashboardComponent } from './user-dashboard.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { CommunicationsTwoComponent } from './components/communications-two/communications-two.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
  },
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'personal-information',
        component: PersonalInformationComponent
      },
      {
        path: 'security',
        component: SecurityComponent
      },
      {
        path: 'communications',
        component: CommunicationsComponent
      },
      {
        path: 'communications-two',
        component: CommunicationsTwoComponent
      },      
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    component: UserDashboardComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
