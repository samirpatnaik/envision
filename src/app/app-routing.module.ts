import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

import {LoginSignupComponent} from './login-signup/login-signup.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ModelsComponent} from './models/models.component';
import {DocsComponent} from './docs/docs.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectReportComponent} from './project-report/project-report.component';
import {ResetPasswordComponent} from './login-signup/reset-password/reset-password.component';
import {LoginComponent} from './login-signup/login/login.component';
import {UserProfileComponent} from './login-signup/user-profile/user-profile.component';
import {ChangepwdComponent} from './login-signup/changepwd/changepwd.component';
import {ProjectResultComponent} from './project-result/project-result.component';
import { Model1009Component } from './projectmodel/model1009/model1009.component';
import { Model1010Component } from './projectmodel/model1010/model1010.component';
import { Model1011Component } from './projectmodel/model1011/model1011.component';
import { Model1012Component } from './projectmodel/model1012/model1012.component';
import { Model1013Component } from './projectmodel/model1013/model1013.component';

import { ViewRunDetailsComponent } from './view-run-details/view-run-details.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'models', component: ModelsComponent},
  {path: 'docs', component: DocsComponent},

  {path: 'login', component: LoginComponent},
  {path: 'signup', component: LoginSignupComponent},
  {path: 'resetpassword', component: ResetPasswordComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuardService]},
  {path: 'changepassword', component: ChangepwdComponent, canActivate: [AuthGuardService]},

  {path: 'createproject', component: CreateProjectComponent, canActivate: [AuthGuardService]},

  {path: 'projectmodel/1009', component: Model1009Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1009/:pid', component: Model1009Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1010', component: Model1010Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1010/:pid', component: Model1010Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1011', component: Model1011Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1011/:pid', component: Model1011Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1012', component: Model1012Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1012/:pid', component: Model1012Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1013', component: Model1013Component, canActivate: [AuthGuardService]},
  {path: 'projectmodel/1013/:pid', component: Model1013Component, canActivate: [AuthGuardService]},

  {path: 'projectrunreport/:mid', component: ProjectReportComponent, canActivate: [AuthGuardService]},
  {path: 'viewrundetails/:pid', component: ViewRunDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'projectresult', component: ProjectResultComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
