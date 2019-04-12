import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonLayoutModule} from  './common-layout/common-layout.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ListmodelComponent } from './listmodel/listmodel.component';
import { MultiSiteCERCLAComponent } from './multi-site-cercla/multi-site-cercla.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    ListmodelComponent,
    MultiSiteCERCLAComponent,
    HomepageComponent,
    DashboardComponent
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
