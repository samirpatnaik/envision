import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelresponseService } from '../../services/modelresponse.service';

declare function isNumberKey(evt:any): any;
import $ from 'jquery';

@Component({
  selector: 'app-model1009',
  templateUrl: './model1009.component.html',
  styleUrls: ['./model1009.component.css']
})
export class Model1009Component implements OnInit {

  multisiteForm: FormGroup;
  submitted = false;
  id : any;
  data : any;
  response: any;
  pagetitle: String;
  argument_array = [];
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private modelresponseService: ModelresponseService, private _router: Router) { }

  ngOnInit() {
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
      if(this.multisiteForm.controls['_IRA'] && this.multisiteForm.controls['_IRA'].value.trim()){
        let modelData = { 'inputId': "_IRA", 'value' : this.multisiteForm.controls['_IRA'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'] && this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'].value.trim()){
        let modelData = { "inputId": "_Num_5_Yr_Rev_Ops", "value" : this.multisiteForm.controls['_Num_5_Yr_Rev_Ops'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'] && this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'].value.trim()){
        let modelData = { "inputId": "_Num_5_Yr_Rev_LTM", "value" : this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Num_Sites'] && this.multisiteForm.controls['_Num_Sites'].value.trim()){
        let modelData = { "inputId": "_Num_Sites", "value" : this.multisiteForm.controls['_Num_Sites'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Avg_Area'] && this.multisiteForm.controls['_Avg_Area'].value.trim()){
        let modelData = { "inputId": "_Avg_Area", "value" : this.multisiteForm.controls['_Avg_Area'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Site_Smpl_Count'] && this.multisiteForm.controls['_Site_Smpl_Count'].value.trim()){
        let modelData = { "inputId": "_Site_Smpl_Count", "value" : this.multisiteForm.controls['_Site_Smpl_Count'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Proc_Smpl_Count'] && this.multisiteForm.controls['_Proc_Smpl_Count'].value.trim()){
        let modelData = { "inputId": "_Proc_Smpl_Count", "value" : this.multisiteForm.controls['_Proc_Smpl_Count'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_PL_w_Cost_Basis'] && this.multisiteForm.controls['_PL_w_Cost_Basis'].value.trim()){
        let modelData = { "inputId": "_PL_w_Cost_Basis", "value" : this.multisiteForm.controls['_PL_w_Cost_Basis'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Treat_Cmplx'] && this.multisiteForm.controls['_Treat_Cmplx'].value.trim()){
        let modelData = { "inputId": "_Treat_Cmplx", "value" : this.multisiteForm.controls['_Treat_Cmplx'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Prot_All'] && this.multisiteForm.controls['_Prot_All'].value.trim()){
        let modelData = { "inputId": "_Prot_All", "value" : this.multisiteForm.controls['_Prot_All'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_CAF'] && this.multisiteForm.controls['_CAF'].value.trim()){
        let modelData = { "inputId": "_CAF", "value" : this.multisiteForm.controls['_CAF'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_E_Yr'] && this.multisiteForm.controls['_E_Yr'].value.trim()){
        let modelData = { "inputId": "_E_Yr", "value" : this.multisiteForm.controls['_E_Yr'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_ACF_Val'] && this.multisiteForm.controls['_ACF_Val'].value.trim()){
        let modelData = { "inputId": "_ACF_Val", "value" : this.multisiteForm.controls['_ACF_Val'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_01'] && this.multisiteForm.controls['_MK_01'].value.trim()){
        let modelData = { "inputId": "_MK_01", "value" : this.multisiteForm.controls['_MK_01'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_02'] && this.multisiteForm.controls['_MK_02'].value.trim()){
        let modelData = { "inputId": "_MK_02", "value" : this.multisiteForm.controls['_MK_02'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_03'] && this.multisiteForm.controls['_MK_03'].value.trim()){
        let modelData = { "inputId": "_MK_03", "value" : this.multisiteForm.controls['_MK_03'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_04'] && this.multisiteForm.controls['_MK_04'].value.trim()){
        let modelData = { "inputId": "_MK_04", "value" : this.multisiteForm.controls['_MK_04'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_05'] && this.multisiteForm.controls['_MK_05'].value.trim()){
        let modelData = { "inputId": "_MK_05", "value" : this.multisiteForm.controls['_MK_05'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_06'] && this.multisiteForm.controls['_MK_06'].value.trim()){
        let modelData = { "inputId": "_MK_06", "value" : this.multisiteForm.controls['_MK_06'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_07'] && this.multisiteForm.controls['_MK_07'].value.trim()){
        let modelData = { "inputId": "_MK_07", "value" : this.multisiteForm.controls['_MK_07'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_08'] && this.multisiteForm.controls['_MK_08'].value.trim()){
        let modelData = { "inputId": "_MK_08", "value" : this.multisiteForm.controls['_MK_08'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_09'] && this.multisiteForm.controls['_MK_09'].value.trim()){
        let modelData = { "inputId": "_MK_09", "value" : this.multisiteForm.controls['_MK_09'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_10'] && this.multisiteForm.controls['_MK_10'].value.trim()){
        let modelData = { "inputId": "_MK_10", "value" : this.multisiteForm.controls['_MK_10'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_11'] && this.multisiteForm.controls['_MK_11'].value.trim()){
        let modelData = { "inputId": "_MK_11", "value" : this.multisiteForm.controls['_MK_11'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_12'] && this.multisiteForm.controls['_MK_12'].value.trim()){
        let modelData = { "inputId": "_MK_12", "value" : this.multisiteForm.controls['_MK_12'].value };
        this.argument_array.push(modelData);
      }

      let data = { "argument":[this.argument_array] };
      console.log(data);
      this.modelresponseService.submitModel(1009,data)
      .subscribe(result =>{
        this.response = result;
        // set data in service which is to be shared
        this.modelresponseService.setData(this.response)
        this._router.navigate(["/projectresult"]);
      });
    }
  }

}