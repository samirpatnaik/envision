import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginSignupComponent} from './login-signup/login-signup.component';
import {ListmodelComponent} from './listmodel/listmodel.component';
import {MultiSiteCERCLAComponent} from './multi-site-cercla/multi-site-cercla.component';
import {HomepageComponent} from './homepage/homepage.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginSignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'listmodel', component: ListmodelComponent},
  {path: 'MultiSiteCERCLA', component: MultiSiteCERCLAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
