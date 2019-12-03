import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelresponseService } from '../../services/modelresponse.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare function isNumberKey(evt:any): any;
import $ from 'jquery';

@Component({
  selector: 'app-model1011',
  templateUrl: './model1011.component.html',
  styleUrls: ['./model1011.component.css']
})
export class Model1011Component implements OnInit {

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
            _Select_1: 'Y',
            _Select_2: 'N',
            _Dim_CY:'',
            _Depth_Ft_Con: '',
            _L_Ft: '',
            _W_Ft: '',
            _Usr_Ttl_CY: '',
            _P_Area: '',
            _ST: '',

            _P_CY: '',
            _Moist:'',
            _Den:'',
            _Prcnt_Non_Haz:'',
            _NH_SW_Con: '',
            _NH_LW_Con: '',
            _SW_Bulk_Con: '',
            _LW_Bulk_Con: '',
            _SW_Drm_Con: '',
            _LW_Drm_Con: '',
            _Const_KGPY_Wtr: '',
            _Conf_Smpl_YN:'N',
            _Conf_Smpl:'',
            _NUM_Ph4_Proc_Smpl_Air: '',
            _NUM_Ph4_Proc_Smpl_Lqd:'',
            _NUM_Ph4_Proc_Smpl_Solid: '',
            _VOC: 'Y',
            _VOC_Gas: 'N',
            _SVOC:'N',
            _SVOC_Gas:'N',
            _PCB:'N',
            _PCB_Gas:'N',
            _MC:'N',
            _TAL_Mtl:'N',
            _Phase3_Req:'Y',
            _Phase4_Req:'Y',
            _Phase6_Req:'N',
            _Phase7_Req:'N',
            _Land_Use:'N',
            _Engr_Cntl:'N',
            _L_Ft_F_Input:'',
            _RACR_YN:'N',
            _Prot_All:'',
            _CAF:'',
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
          
          console.log(qinfo);
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
      _Select_1: ['Y'],
      _Select_2: ['N'],
      _Dim_CY:[''],
      _Depth_Ft_Con: ['', [ Validators.min(5.00), Validators.max(40.00)]],
      _L_Ft: ['', [ Validators.min(10), Validators.max(10000)]],
      _W_Ft: ['', [ Validators.min(25), Validators.max(500)]],
      _Usr_Ttl_CY: ['', [ Validators.min(10), Validators.max(500000)]],
      _P_Area: ['', [ Validators.min(0.01)]],
      _ST: [''],

      _P_CY: ['', [ Validators.min(10.00), Validators.max(500000.00)]],
      _Moist:[''],
      _Den:[''],
      _Prcnt_Non_Haz:[''],
      _NH_SW_Con: ['', [Validators.min(0.01), Validators.max(50000.00)]],
      _NH_LW_Con: ['', [Validators.min(0.01), Validators.max(1000000.00)]],
      _SW_Bulk_Con: ['', [Validators.min(0.01), Validators.max(50000.00)]],
      _LW_Bulk_Con: ['', [Validators.min(0.01), Validators.max(1000000.00)]],
      _SW_Drm_Con: ['', [Validators.min(0.01), Validators.max(10000.00)]],
      _LW_Drm_Con: ['', [Validators.min(0.01), Validators.max(10000.00)]],
      _Const_KGPY_Wtr: ['', [Validators.min(0.01), Validators.max(300000.00)]],
      _Conf_Smpl_YN:['N'],
      _Conf_Smpl:[''],
      _NUM_Ph4_Proc_Smpl_Air: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph4_Proc_Smpl_Lqd: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph4_Proc_Smpl_Solid: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _VOC: ['Y'],
      _VOC_Gas: ['N'],
      _SVOC:['N'],
      _SVOC_Gas:['N'],
      _PCB:['N'],
      _PCB_Gas:['N'],
      _MC:['N'],
      _TAL_Mtl:['N'],
      _Phase3_Req:['Y'],
      _Phase4_Req:['Y'],
      _Phase6_Req:['N'],
      _Phase7_Req:['N'],
      _Land_Use:['N'],
      _Engr_Cntl:['N'],
      _L_Ft_F_Input:['', [Validators.min(10.00), Validators.max(10000.00)]],
      _RACR_YN:['N'],
      _Prot_All:[''],
      _CAF:['', [Validators.min(0.5), Validators.max(2.00)]],
      _E_Yr:[''],

      _ACF_Val:[''],
      _MK_01:['', [Validators.min(1), Validators.max(5)]],
      _MK_02:['', [Validators.min(1), Validators.max(5)]],
      _MK_03:['', [Validators.min(1), Validators.max(1.5)]],
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
      if(this.multisiteForm.controls['_Select_1'] && this.multisiteForm.controls['_Select_1'].value){
        let modelData = { "inputId": "_Select_1", "value" : this.multisiteForm.controls['_Select_1'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Select_2'] && this.multisiteForm.controls['_Select_2'].value){
        let modelData = { "inputId": "_Select_2", "value" : this.multisiteForm.controls['_Select_2'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Dim_CY'] && this.multisiteForm.controls['_Dim_CY'].value){
        let modelData = { "inputId": "_Dim_CY", "value" : this.multisiteForm.controls['_Dim_CY'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Depth_Ft_Con'] && this.multisiteForm.controls['_Depth_Ft_Con'].value){
        let modelData = { "inputId": "_Depth_Ft_Con", "value" : this.multisiteForm.controls['_Depth_Ft_Con'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_L_Ft'] && this.multisiteForm.controls['_L_Ft'].value){
        let modelData = { "inputId": "_L_Ft", "value" : this.multisiteForm.controls['_L_Ft'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_W_Ft'] && this.multisiteForm.controls['_W_Ft'].value){
        let modelData = { "inputId": "_W_Ft", "value" : this.multisiteForm.controls['_W_Ft'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Usr_Ttl_CY'] && this.multisiteForm.controls['_Usr_Ttl_CY'].value){
        let modelData = { "inputId": "_Usr_Ttl_CY", "value" : this.multisiteForm.controls['_Usr_Ttl_CY'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_P_Area'] && this.multisiteForm.controls['_P_Area'].value){
        let modelData = { "inputId": "_P_Area", "value" : this.multisiteForm.controls['_P_Area'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_ST'] && this.multisiteForm.controls['_ST'].value){
        let modelData = { "inputId": "_ST", "value" : this.multisiteForm.controls['_ST'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_P_CY'] && this.multisiteForm.controls['_P_CY'].value){
        let modelData = { "inputId": "_P_CY", "value" : this.multisiteForm.controls['_P_CY'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Moist'] && this.multisiteForm.controls['_Moist'].value){
        let modelData = { "inputId": "_Moist", "value" : this.multisiteForm.controls['_Moist'].value };
        this.argument_array.push(modelData);
      }

      if(this.multisiteForm.controls['_Den'] && this.multisiteForm.controls['_Den'].value){
        let modelData = { 'inputId': "_Den", 'value' : this.multisiteForm.controls['_Den'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Prcnt_Non_Haz'] && this.multisiteForm.controls['_Prcnt_Non_Haz'].value){
        let modelData = { "inputId": "_Prcnt_Non_Haz", "value" : this.multisiteForm.controls['_Prcnt_Non_Haz'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NH_SW_Con'] && this.multisiteForm.controls['_NH_SW_Con'].value){
        let modelData = { "inputId": "_NH_SW_Con", "value" : this.multisiteForm.controls['_NH_SW_Con'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NH_LW_Con'] && this.multisiteForm.controls['_NH_LW_Con'].value){
        let modelData = { "inputId": "_NH_LW_Con", "value" : this.multisiteForm.controls['_NH_LW_Con'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_SW_Bulk_Con'] && this.multisiteForm.controls['_SW_Bulk_Con'].value){
        let modelData = { "inputId": "_SW_Bulk_Con", "value" : this.multisiteForm.controls['_SW_Bulk_Con'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_LW_Bulk_Con'] && this.multisiteForm.controls['_LW_Bulk_Con'].value){
        let modelData = { "inputId": "_LW_Bulk_Con", "value" : this.multisiteForm.controls['_LW_Bulk_Con'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_SW_Drm_Con'] && this.multisiteForm.controls['_SW_Drm_Con'].value){
        let modelData = { "inputId": "_SW_Drm_Con", "value" : this.multisiteForm.controls['_SW_Drm_Con'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_LW_Drm_Con'] && this.multisiteForm.controls['_LW_Drm_Con'].value){
        let modelData = { "inputId": "_LW_Drm_Con", "value" : this.multisiteForm.controls['_LW_Drm_Con'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Const_KGPY_Wtr'] && this.multisiteForm.controls['_Const_KGPY_Wtr'].value){
        let modelData = { "inputId": "_Const_KGPY_Wtr", "value" : this.multisiteForm.controls['_Const_KGPY_Wtr'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Conf_Smpl_YN'] && this.multisiteForm.controls['_Conf_Smpl_YN'].value){
        let modelData = { "inputId": "_Conf_Smpl_YN", "value" : this.multisiteForm.controls['_Conf_Smpl_YN'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Conf_Smpl'] && this.multisiteForm.controls['_Conf_Smpl'].value){
        let modelData = { "inputId": "_Conf_Smpl", "value" : this.multisiteForm.controls['_Conf_Smpl'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Air'] && this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Air'].value){
        let modelData = { "inputId": "_NUM_Ph4_Proc_Smpl_Air", "value" : this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Air'].value };
        this.argument_array.push(modelData);
      }

      if(this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Lqd'] && this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Lqd'].value){
        let modelData = { 'inputId': "_NUM_Ph4_Proc_Smpl_Lqd", 'value' : this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Lqd'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Solid'] && this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Solid'].value){
        let modelData = { "inputId": "_NUM_Ph4_Proc_Smpl_Solid", "value" : this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Solid'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_VOC'] && this.multisiteForm.controls['_VOC'].value){
        let modelData = { "inputId": "_VOC", "value" : this.multisiteForm.controls['_VOC'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_VOC_Gas'] && this.multisiteForm.controls['_VOC_Gas'].value){
        let modelData = { "inputId": "_VOC_Gas", "value" : this.multisiteForm.controls['_VOC_Gas'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_SVOC'] && this.multisiteForm.controls['_SVOC'].value){
        let modelData = { "inputId": "_SVOC", "value" : this.multisiteForm.controls['_SVOC'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_SVOC_Gas'] && this.multisiteForm.controls['_SVOC_Gas'].value){
        let modelData = { "inputId": "_SVOC_Gas", "value" : this.multisiteForm.controls['_SVOC_Gas'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_PCB'] && this.multisiteForm.controls['_PCB'].value){
        let modelData = { "inputId": "_PCB", "value" : this.multisiteForm.controls['_PCB'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_PCB_Gas'] && this.multisiteForm.controls['_PCB_Gas'].value){
        let modelData = { "inputId": "_PCB_Gas", "value" : this.multisiteForm.controls['_PCB_Gas'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_MC'] && this.multisiteForm.controls['_MC'].value){
        let modelData = { "inputId": "_MC", "value" : this.multisiteForm.controls['_MC'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_TAL_Mtl'] && this.multisiteForm.controls['_TAL_Mtl'].value){
        let modelData = { "inputId": "_TAL_Mtl", "value" : this.multisiteForm.controls['_TAL_Mtl'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Phase3_Req'] && this.multisiteForm.controls['_Phase3_Req'].value){
        let modelData = { "inputId": "_Phase3_Req", "value" : this.multisiteForm.controls['_Phase3_Req'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Phase4_Req'] && this.multisiteForm.controls['_Phase4_Req'].value){
        let modelData = { "inputId": "_Phase4_Req", "value" : this.multisiteForm.controls['_Phase4_Req'].value };
        this.argument_array.push(modelData);
      }

      if(this.multisiteForm.controls['_Phase6_Req'] && this.multisiteForm.controls['_Phase6_Req'].value){
        let modelData = { "inputId": "_Phase6_Req", "value" : this.multisiteForm.controls['_Phase6_Req'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Phase7_Req'] && this.multisiteForm.controls['_Phase7_Req'].value){
        let modelData = { "inputId": "_Phase7_Req", "value" : this.multisiteForm.controls['_Phase7_Req'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Land_Use'] && this.multisiteForm.controls['_Land_Use'].value){
        let modelData = { "inputId": "_Land_Use", "value" : this.multisiteForm.controls['_Land_Use'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Engr_Cntl'] && this.multisiteForm.controls['_Engr_Cntl'].value){
        let modelData = { "inputId": "_Engr_Cntl", "value" : this.multisiteForm.controls['_Engr_Cntl'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_L_Ft_F_Input'] && this.multisiteForm.controls['_L_Ft_F_Input'].value){
        let modelData = { "inputId": "_L_Ft_F_Input", "value" : this.multisiteForm.controls['_L_Ft_F_Input'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_RACR_YN'] && this.multisiteForm.controls['_RACR_YN'].value){
        let modelData = { "inputId": "_RACR_YN", "value" : this.multisiteForm.controls['_RACR_YN'].value };
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
      this.modelresponseService.submitModel(1011,data)
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
