import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelresponseService } from '../services/modelresponse.service';

@Component({
  selector: 'app-package-module',
  templateUrl: './package-module.component.html',
  styleUrls: ['./package-module.component.css']
})
export class PackageModuleComponent implements OnInit {

  constructor(private modelresponseService: ModelresponseService, private _router: Router ) { }

  ngOnInit() {
  }

 /* setPaln(value){
    if( value == 'monthly' ) this.modelresponseService.setPakageValue(19.50,'Monthly Premium Subscription' );
    else  this.modelresponseService.setPakageValue(120.00, 'Yearly Premium Subscription');
     this._router.navigate(["/subscribe"]);
  }
*/
  setPaln(value){
    let PlanDetails = {};
   if( value == 'monthly' ) {
    PlanDetails ={
       plan : 'monthly',
       amount : 19.50
     }
     this.modelresponseService.setPakageValue(PlanDetails);
   }
   else{
    PlanDetails ={
      plan : 'yearly',
      amount : 120.00
    }
    this.modelresponseService.setPakageValue(PlanDetails);
   }  
    this._router.navigate(["subscribe"]);
  }

}
