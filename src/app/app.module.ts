import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonLayoutModule} from  './common-layout/common-layout.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { ProjectmodelComponent } from './projectmodel/projectmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    HomepageComponent,
    DashboardComponent,
    CreateProjectComponent,
    ProjectReportComponent,
    ProjectmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
