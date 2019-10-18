import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../services/login-register.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardInfo: any;
  constructor(private _user:LoginRegisterService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this._user.fetchprofile().subscribe(
      qinfo =>{
        console.log(qinfo.projects);
        this.dashboardInfo = qinfo.projects;
        setTimeout(() => {
          this.spinner.hide();
        }, 0);
      });
  }

}
