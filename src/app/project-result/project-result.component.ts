import { Component, OnInit } from '@angular/core';
import { ModelresponseService } from '../services/modelresponse.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project-result',
  templateUrl: './project-result.component.html',
  styleUrls: ['./project-result.component.css']
})
export class ProjectResultComponent implements OnInit {

  constructor(private modelresponseService: ModelresponseService, private spinner: NgxSpinnerService) { }
  
  description: any;
  modelname: any;
  costvalue: any;
  private loadComponent = false;
  ngOnInit() {
    this.spinner.show();

    this.modelresponseService.apiData.subscribe((data) => {
      console.log('Subscriber B:', data);
      this.description = data.run.description;
      this.modelname = data.run.modelName;
      this.costvalue = data.run.estimate.costValue;
      setTimeout(() => {
        this.spinner.hide();
      }, 0);
    });
    
   
    
  }

  loadMyChildComponent(){
    this.loadComponent = true;
  }

}
