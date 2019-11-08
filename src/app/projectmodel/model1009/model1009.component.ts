import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelresponseService } from '../../services/modelresponse.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare function isNumberKey(evt:any): any;
import $ from 'jquery';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-model1009',
  templateUrl: './model1009.component.html',
  styleUrls: ['./model1009.component.css']
})
export class Model1009Component implements OnInit {

  multisiteForm: FormGroup;
  submitted = false;
  id : any;
  pid: any;
  data : any;
  response: any;
  pagetitle: String;
  argument_array = [];
  input_array = [];
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private modelresponseService: ModelresponseService, private _router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.pid = +this.route.snapshot.paramMap.get('pid');
    this.create_form();
    isNumberKey(event);

    if(this.pid != ''){
      this.modelresponseService.viewrundetails(this.pid).subscribe(
        qinfo =>{
          const formObject ={
            _IRA: 'N',
            _Num_5_Yr_Rev_Ops: '',
            _Num_5_Yr_Rev_LTM: '',
            _Num_Sites: '',
            _Avg_Area: '',
            _Site_Smpl_Count: '',
            _Proc_Smpl_Count: '',
            _PL_w_Cost_Basis: 'N',
            _Treat_Cmplx:'',
            _Prot_All:'',
            _CAF: '',
            _E_Yr:'',
            _ACF_Val:'',
            _MK_01:'',
            _MK_02:'',
            _MK_03:'',
            _MK_04:'',
            _MK_05:'',
            _MK_06:'',
            _MK_07:'',
            _MK_08:'',
            _MK_09:'',
            _MK_10:'',
            _MK_11:'',
            _MK_12:''
          };
          
          var my_object = qinfo.input.argument[0].reduce(function(prev, curr) {
            prev[curr.inputId] = curr.value;
            return prev;
          }, {});

          
          Object.assign(formObject, my_object);
          this.multisiteForm.setValue(formObject);
         
        });
    }
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

  validate_tab(tab_name){
    this.submitted = true;
    if (this.multisiteForm.invalid) {
      return;
    }else{
      document.getElementById(tab_name).click();
    }
  }
  
  submit_multisiteForm() {
    this.submitted = true;
    
    if (this.multisiteForm.invalid) {
      return;
    } else {
      this.spinner.show();
      if(this.multisiteForm.controls['_IRA'] && this.multisiteForm.controls['_IRA'].value){
        let modelData = { 'inputId': "_IRA", 'value' : this.multisiteForm.controls['_IRA'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'] && this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'].value){
        let modelData = { "inputId": "_Num_5_Yr_Rev_Ops", "value" : this.multisiteForm.controls['_Num_5_Yr_Rev_Ops'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'] && this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'].value){
        let modelData = { "inputId": "_Num_5_Yr_Rev_LTM", "value" : this.multisiteForm.controls['_Num_5_Yr_Rev_LTM'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Num_Sites'] && this.multisiteForm.controls['_Num_Sites'].value){
        let modelData = { "inputId": "_Num_Sites", "value" : this.multisiteForm.controls['_Num_Sites'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Avg_Area'] && this.multisiteForm.controls['_Avg_Area'].value){
        let modelData = { "inputId": "_Avg_Area", "value" : this.multisiteForm.controls['_Avg_Area'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Site_Smpl_Count'] && this.multisiteForm.controls['_Site_Smpl_Count'].value){
        let modelData = { "inputId": "_Site_Smpl_Count", "value" : this.multisiteForm.controls['_Site_Smpl_Count'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Proc_Smpl_Count'] && this.multisiteForm.controls['_Proc_Smpl_Count'].value){
        let modelData = { "inputId": "_Proc_Smpl_Count", "value" : this.multisiteForm.controls['_Proc_Smpl_Count'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_PL_w_Cost_Basis'] && this.multisiteForm.controls['_PL_w_Cost_Basis'].value){
        let modelData = { "inputId": "_PL_w_Cost_Basis", "value" : this.multisiteForm.controls['_PL_w_Cost_Basis'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Treat_Cmplx'] && this.multisiteForm.controls['_Treat_Cmplx'].value){
        let modelData = { "inputId": "_Treat_Cmplx", "value" : this.multisiteForm.controls['_Treat_Cmplx'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Prot_All'] && this.multisiteForm.controls['_Prot_All'].value){
        let modelData = { "inputId": "_Prot_All", "value" : this.multisiteForm.controls['_Prot_All'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_CAF'] && this.multisiteForm.controls['_CAF'].value){
        let modelData = { "inputId": "_CAF", "value" : this.multisiteForm.controls['_CAF'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_E_Yr'] && this.multisiteForm.controls['_E_Yr'].value){
        let modelData = { "inputId": "_E_Yr", "value" : this.multisiteForm.controls['_E_Yr'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_ACF_Val'] && this.multisiteForm.controls['_ACF_Val'].value){
        let modelData = { "inputId": "_ACF_Val", "value" : this.multisiteForm.controls['_ACF_Val'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_01'] && this.multisiteForm.controls['_MK_01'].value){
        let modelData = { "inputId": "_MK_01", "value" : this.multisiteForm.controls['_MK_01'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_02'] && this.multisiteForm.controls['_MK_02'].value){
        let modelData = { "inputId": "_MK_02", "value" : this.multisiteForm.controls['_MK_02'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_03'] && this.multisiteForm.controls['_MK_03'].value){
        let modelData = { "inputId": "_MK_03", "value" : this.multisiteForm.controls['_MK_03'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_04'] && this.multisiteForm.controls['_MK_04'].value){
        let modelData = { "inputId": "_MK_04", "value" : this.multisiteForm.controls['_MK_04'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_05'] && this.multisiteForm.controls['_MK_05'].value){
        let modelData = { "inputId": "_MK_05", "value" : this.multisiteForm.controls['_MK_05'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_06'] && this.multisiteForm.controls['_MK_06'].value){
        let modelData = { "inputId": "_MK_06", "value" : this.multisiteForm.controls['_MK_06'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_07'] && this.multisiteForm.controls['_MK_07'].value){
        let modelData = { "inputId": "_MK_07", "value" : this.multisiteForm.controls['_MK_07'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_08'] && this.multisiteForm.controls['_MK_08'].value){
        let modelData = { "inputId": "_MK_08", "value" : this.multisiteForm.controls['_MK_08'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_09'] && this.multisiteForm.controls['_MK_09'].value){
        let modelData = { "inputId": "_MK_09", "value" : this.multisiteForm.controls['_MK_09'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_10'] && this.multisiteForm.controls['_MK_10'].value){
        let modelData = { "inputId": "_MK_10", "value" : this.multisiteForm.controls['_MK_10'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_11'] && this.multisiteForm.controls['_MK_11'].value){
        let modelData = { "inputId": "_MK_11", "value" : this.multisiteForm.controls['_MK_11'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MK_12'] && this.multisiteForm.controls['_MK_12'].value){
        let modelData = { "inputId": "_MK_12", "value" : this.multisiteForm.controls['_MK_12'].value };
        this.argument_array.push(modelData);
      }

      let data = { "argument":this.argument_array };
      //console.log(data);
      this.modelresponseService.submitModel(1009,data)
      .subscribe(result =>{
        setTimeout(() => {
          this.response = result;
          // set data in service which is to be shared
          this.modelresponseService.setData(this.response)  
          this.spinner.hide();
        }, 0);
        this._router.navigate(["/projectresult"]);
      });
    }
  }

}
