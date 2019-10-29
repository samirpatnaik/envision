import { Component, OnInit } from '@angular/core';
import { ModelresponseService } from '../services/modelresponse.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.css']
})
export class ProjectReportComponent implements OnInit {

  projectrunInfo:any;
  id: any;
  response: any;

  constructor(private _model:ModelresponseService, private spinner: NgxSpinnerService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('mid');

    this.spinner.show();
    this._model.rundetails(this.id).subscribe(
      qinfo =>{
        //console.log(qinfo);
        this.projectrunInfo = qinfo;
        setTimeout(() => {
          this.spinner.hide();
        }, 0);
      });
  }

  view_projectResult(pid){
    this._model.viewrundetails(pid)
    .subscribe(result =>{
      this.response = result;

      // set data in service which is to be shared
      this._model.setData(this.response)
      this._router.navigate(["/projectresult"]);
    });
  }

}
