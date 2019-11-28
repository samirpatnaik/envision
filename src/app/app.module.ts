import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CommonLayoutModule} from  './common-layout/common-layout.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { ProjectResultComponent } from './project-result/project-result.component';
import { ProjectResultDetailsComponent } from './project-result/project-result-details/project-result-details.component';
import { Model1009Component } from './projectmodel/model1009/model1009.component';
import { Model1010Component } from './projectmodel/model1010/model1010.component';
import { ResetPasswordComponent } from './login-signup/reset-password/reset-password.component';
import { LoginComponent } from './login-signup/login/login.component';
import { UserProfileComponent } from './login-signup/user-profile/user-profile.component';
import { ChangepwdComponent } from './login-signup/changepwd/changepwd.component';
import { ModelsComponent } from './models/models.component';
import { DocsComponent } from './docs/docs.component';
import { SortingResultPipe } from './sorting-result.pipe';
import { ViewRunDetailsComponent } from './view-run-details/view-run-details.component';
import { Model1011Component } from './projectmodel/model1011/model1011.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    HomepageComponent,
    DashboardComponent,
    CreateProjectComponent,
    ProjectReportComponent,
    ProjectResultComponent,
    ProjectResultDetailsComponent,
    Model1009Component,
    Model1010Component,
    ResetPasswordComponent,
    LoginComponent,
    UserProfileComponent,
    ChangepwdComponent,
    ModelsComponent,
    DocsComponent,
    SortingResultPipe,
    ViewRunDetailsComponent,
    Model1011Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
