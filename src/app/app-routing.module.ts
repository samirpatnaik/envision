import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginSignupComponent} from './login-signup/login-signup.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {HomepageComponent} from './homepage/homepage.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectReportComponent} from './project-report/project-report.component';
import {ProjectmodelComponent} from './projectmodel/projectmodel.component';
import {ProjectResultComponent} from './project-result/project-result.component';
import { Model1009Component } from './projectmodel/model1009/model1009.component';
import { Model1010Component } from './projectmodel/model1010/model1010.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginSignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'createproject', component: CreateProjectComponent},
  {path: 'projectmodel/1009', component: Model1009Component},
  {path: 'projectmodel/1010', component: Model1010Component},
  {path: 'projectreport', component: ProjectReportComponent},
  {path: 'projectresult', component: ProjectResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
