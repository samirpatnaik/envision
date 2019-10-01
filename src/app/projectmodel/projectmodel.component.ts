import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelresponseService } from '../services/modelresponse.service';

declare function isNumberKey(evt:any): any;
import $ from 'jquery';

@Component({
  selector: 'app-projectmodel',
  templateUrl: './projectmodel.component.html',
  styleUrls: ['./projectmodel.component.css']
})
export class ProjectmodelComponent implements OnInit {

  multisiteForm: FormGroup;
  submitted = false;
  id : any;
  data : any;
  response: any;
  pagetitle: String;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private modelresponseService: ModelresponseService, private _router: Router) { }

  ngOnInit() {
    
    this.id = +this.route.snapshot.paramMap.get('listid');
   /* this.modelresponseService.getModelFields(this.id)
      .subscribe(
        fldinfo =>{
         this.pagetitle = fldinfo.name;
        }
      );*/
    this.create_form();
    isNumberKey(event);

  }

  create_form(){
    this.multisiteForm = this.formBuilder.group({
      _IRA: ['N'],
      _Num_5_Yr_Rev_Ops: ['', [ Validators.min(0.01), Validators.max(10.00)]],
      _Num_5_Yr_Rev_LTM: ['', [ Validators.min(0.01), Validators.max(10.00)]],
      _Num_Sites: ['', [ Validators.min(0.01)]],
      _Avg_Area: ['', [ Validators.min(0.01)]],
      _Site_Smpl_Count: ['', [ Validators.min(0.01), Validators.max(4.00)]],
      _Proc_Smpl_Count: ['', [ Validators.min(0.01), Validators.max(3.00)]],
      _PL_w_Cost_Basis: ['N'],
      _Treat_Cmplx:[''],
      _Prot_All:[''],
      _CAF: ['', [Validators.min(0.5), Validators.max(2.00)]],
      _E_Yr:[''],
      _ACF_Val:[''],
      _MK_01:['', [Validators.min(1), Validators.max(5)]],
      _MK_02:['', [Validators.min(1), Validators.max(5)]],
      _MK_03:['', [Validators.min(1), Validators.max(5)]],
      _MK_04:[''],
      _MK_05:['', [Validators.min(1), Validators.max(1.2)]],
      _MK_06:[''],
      _MK_07:['', [Validators.min(1), Validators.max(3)]],
      _MK_08:['', [Validators.min(1), Validators.max(1.2)]],
      _MK_09:['', [Validators.min(1), Validators.max(1.5)]],
      _MK_10:[''],
      _MK_11:[''],
      _MK_12:['', [Validators.min(1), Validators.max(1.5)]],
    });    
  }
  get f() { return this.multisiteForm.controls; }

  reset_inputctrl(param1,param2){
     // $('#'+param1).val('');
      this.multisiteForm.controls[param1].reset();
      $('#'+param1).attr("placeholder", param2).val("").change();
      $('#'+param1).removeClass( "valuechange_bg" );
      $('#'+param1).addClass( "reset_bg" );
  }
  updatebg(ctrlnm){
    $('#'+ctrlnm).removeClass( "reset_bg" );
    $('#'+ctrlnm).addClass( "valuechange_bg" );
  }
  reset_selectctrl(nm,indx){
    this.multisiteForm.controls[nm].reset();
    $('#'+nm).prop('selectedIndex',indx);
    $('#'+nm).removeClass( "valuechange_bg" );
    $('#'+nm).addClass( "reset_bg" );

  }
  reset_radioctrl(optnm,optval){
    this.multisiteForm.controls[optnm].reset();
    $('input[id='+optnm+'][value='+optval+']').prop("checked",true);
  }
  submit_multisiteForm() {
    this.submitted = true;
    if (this.multisiteForm.invalid) {
      return;
    } else {
      
      let data = { "argument":[ 
        { "inputId": "_IRA", "value" : this.multisiteForm.controls['_IRA'].value },
        { "inputId": "_Num_5_Yr_Rev_Ops", "value" : this.multisiteForm.controls['_Num_5_Yr_Rev_Ops'].value },
        { "inputId": "_Num_5_Yr_Rev_LTM", "value" : this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'].value },
        { "inputId": "_Num_Sites", "value" : this.multisiteForm.controls['_Num_Sites'].value },
        { "inputId": "_Avg_Area", "value" : this.multisiteForm.controls['_Avg_Area'].value },
        { "inputId": "_Site_Smpl_Count", "value" : this.multisiteForm.controls['_Site_Smpl_Count'].value },
        { "inputId": "_Proc_Smpl_Count", "value" : this.multisiteForm.controls['_Proc_Smpl_Count'].value },
        { "inputId": "_PL_w_Cost_Basis", "value" : this.multisiteForm.controls['_PL_w_Cost_Basis'].value },
        { "inputId": "_Treat_Cmplx", "value" : this.multisiteForm.controls['_Treat_Cmplx'].value },
        { "inputId": "_Prot_All", "value" : this.multisiteForm.controls['_Prot_All'].value },
        { "inputId": "_CAF", "value" : this.multisiteForm.controls['_CAF'].value },
        { "inputId": "_E_Yr", "value" : this.multisiteForm.controls['_E_Yr'].value },
        { "inputId": "_ACF_Val", "value" : this.multisiteForm.controls['_ACF_Val'].value },
        { "inputId": "_MK_01", "value" : this.multisiteForm.controls['_MK_01'].value },
        { "inputId": "_MK_02", "value" : this.multisiteForm.controls['_MK_02'].value },
        { "inputId": "_MK_03", "value" : this.multisiteForm.controls['_MK_03'].value },
        { "inputId": "_MK_04", "value" : this.multisiteForm.controls['_MK_04'].value },
        { "inputId": "_MK_05", "value" : this.multisiteForm.controls['_MK_05'].value },
        { "inputId": "_MK_06", "value" : this.multisiteForm.controls['_MK_06'].value },
        { "inputId": "_MK_07", "value" : this.multisiteForm.controls['_MK_07'].value },
        { "inputId": "_MK_08", "value" : this.multisiteForm.controls['_MK_08'].value },
        { "inputId": "_MK_09", "value" : this.multisiteForm.controls['_MK_09'].value },
        { "inputId": "_MK_10", "value" : this.multisiteForm.controls['_MK_10'].value },
        { "inputId": "_MK_11", "value" : this.multisiteForm.controls['_MK_11'].value },
        { "inputId": "_MK_12", "value" : this.multisiteForm.controls['_MK_12'].value }]
     };
     // console.log(data);
      this.modelresponseService.submitModel(this.id,data)
      .subscribe(result =>{
        this.response = result;
        // set data in service which is to be shared
        this.modelresponseService.setData(this.response)
        this._router.navigate(["/projectresult"]);
      });
    }
  }

}
