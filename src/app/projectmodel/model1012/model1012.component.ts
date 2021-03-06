import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelresponseService } from '../../services/modelresponse.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare function isNumberKey(evt:any): any;
import $ from 'jquery';

@Component({
  selector: 'app-model1012',
  templateUrl: './model1012.component.html',
  styleUrls: ['./model1012.component.css']
})
export class Model1012Component implements OnInit {

  multisiteForm: FormGroup;
  submitted = false;
  id : any;
  pid: any;
  runflag: any;
  data : any;
  response: any;
  pagetitle: String;
  argument_array = [];
  input_array = [];
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private modelresponseService: ModelresponseService, private _router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.pid = +this.route.snapshot.paramMap.get('pid');
    this.runflag = this.route.snapshot.paramMap.get('runflag');

    this.create_form();
    isNumberKey(event);
    
    if(this.pid != '' && this.runflag == ''){
      this.modelresponseService.viewrundetails(this.pid).subscribe(
        qinfo =>{
          const formObject ={
            _IRA: 'N',
            _P_Area: '',
            _ST: '',
            _WDepth:'',
            _AST: '',
            _W_Ft: '',
            _GWDepth: '',
            _Conf: 'N',
            _Unconsolid: 'N',
            _SnglUse: '',      
            _Ext_Well_YN: 'Y',
            _HC: '',
            _Ext_Well_Dia: '',
            _WNum_Ext_Well: '',
            _Ext_Well_Mthd:'',
            _P_GPM: '',
            _P_CFM_Ext: '',
            _Inj_Well_YN: 'Y',
            _GWInj_YN: 'N',
            _Inj_Well_Dia: '',
            _WNum_Inj_Well: '',
            _Inj_Well_Mthd: '',      
            _P_CFM_Inj: '',
            _Ops_Yr: '',
            _YN_Equip_Encl: 'N',
            _YN_Trailr_Blw_Sys: 'Y',
            _Process_Samp_YN: 'Y',      
            _NUM_PH4_Proc_Smpl_Air: '',
            _NUM_Ph4_Proc_Smpl_Lqd: '',
            _NUM_Ph4_Proc_Smpl_Solid: '',
            _NUM_Ph6_Proc_Smpl_Air: '',
            _NUM_Ph6_Proc_Smpl_Lqd: '',
            _NUM_Ph6_Proc_Smpl_Solid: '',

            _P_CFM: '',
            _VOC: 'Y',
            _VOC_Gas: 'Y',
            _SVOC:'N',
            _SVOC_Gas:'N',
            _PCB:'N',
            _PCB_Gas:'N',
            _MC:'N',
            _TAL_Mtl:'N',
            _Well_Drill_Dia: '',
            _Prcnt_NH_Drill_C:'',
            _Moist:'',
            _Den:'',
            _NH_SW_Con: '',
            _NH_LW_Con: '',
            _SW_Bulk_Con: '',
            _LW_Bulk_Con: '',
            _SW_Drm_Con: '',
            _LW_Drm_Con: '',
            _Const_KGPY_Wtr: '',
            _NH_SW_OM: '',
            _NH_LW_OM: '',
            _SW_Bulk_OM: '',
            _O_M_KGPY_Wtr: '',
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
      _P_Area: ['', [ Validators.min(0.01)]],
      _ST: [''],
      _WDepth:['', [ Validators.min(11), Validators.max(210)]],
      _AST: ['', [ Validators.min(0), Validators.max(200)]],
      _W_Ft: ['', [ Validators.min(25), Validators.max(500)]],
      _GWDepth: ['', [ Validators.min(3), Validators.max(200)]],
      _Conf: ['N'],
      _Unconsolid: ['N'],
      _SnglUse: [''],      
      _Ext_Well_YN: ['Y'],
      _HC: ['', [ Validators.min(5.00), Validators.max(500.00)]],
      _Ext_Well_Dia: ['', [ Validators.min(1), Validators.max(16)]],
      _WNum_Ext_Well: ['', [ Validators.min(0), Validators.max(200)]],
      _Ext_Well_Mthd:[''],
      _P_GPM: ['', [ Validators.min(1.00), Validators.max(500.00)]],
      _P_CFM_Ext: ['', [ Validators.min(20.00), Validators.max(5000.00)]],
      _Inj_Well_YN: ['Y'],
      _GWInj_YN: ['N'],
      _Inj_Well_Dia: ['', [ Validators.min(1.00), Validators.max(16.00)]],
      _WNum_Inj_Well: ['', [ Validators.min(0), Validators.max(500.00)]],
      _Inj_Well_Mthd: [''],      
      _P_CFM_Inj: ['', [ Validators.min(20.00), Validators.max(5000.00)]],
      _Ops_Yr: ['', [ Validators.min(0), Validators.max(30.00)]],
      _YN_Equip_Encl: ['N'],
      _YN_Trailr_Blw_Sys: ['Y'],
      _Process_Samp_YN: ['Y'],      
      _NUM_PH4_Proc_Smpl_Air: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph4_Proc_Smpl_Lqd: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph4_Proc_Smpl_Solid: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph6_Proc_Smpl_Air: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph6_Proc_Smpl_Lqd: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph6_Proc_Smpl_Solid: ['', [Validators.min(0.01), Validators.max(5000.00)]],

      _P_CFM: ['', [Validators.min(200), Validators.max(5000)]],
      _VOC: ['Y'],
      _VOC_Gas: ['Y'],
      _SVOC:['N'],
      _SVOC_Gas:['N'],
      _PCB:['N'],
      _PCB_Gas:['N'],
      _MC:['N'],
      _TAL_Mtl:['N'],
      _Well_Drill_Dia: ['', [Validators.min(1), Validators.max(16)]],
      _Prcnt_NH_Drill_C:[''],
      _Moist:[''],
      _Den:[''],
      _NH_SW_Con: ['', [Validators.min(0.01), Validators.max(50000.00)]],
      _NH_LW_Con: ['', [Validators.min(0.01), Validators.max(1000000.00)]],
      _SW_Bulk_Con: ['', [Validators.min(0.01), Validators.max(50000.00)]],
      _LW_Bulk_Con: ['', [Validators.min(0.01), Validators.max(1000000.00)]],
      _SW_Drm_Con: ['', [Validators.min(0.01), Validators.max(10000.00)]],
      _LW_Drm_Con: ['', [Validators.min(0.01), Validators.max(10000.00)]],
      _Const_KGPY_Wtr: ['', [Validators.min(0.01), Validators.max(300000.00)]],
      _NH_SW_OM: ['', [Validators.min(0.01), Validators.max(50000.00)]],
      _NH_LW_OM: ['', [Validators.min(0.01), Validators.max(1000000.00)]],
      _SW_Bulk_OM: ['', [Validators.min(0.01), Validators.max(10000.00)]],
      _O_M_KGPY_Wtr: ['', [Validators.min(0.01), Validators.max(300000.00)]],
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
      if(this.multisiteForm.controls['_P_Area'] && this.multisiteForm.controls['_P_Area'].value){
        let modelData = { "inputId": "_P_Area", "value" : this.multisiteForm.controls['_P_Area'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_ST'] && this.multisiteForm.controls['_ST'].value){
        let modelData = { "inputId": "_ST", "value" : this.multisiteForm.controls['_ST'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_WDepth'] && this.multisiteForm.controls['_WDepth'].value){
        let modelData = { "inputId": "_WDepth", "value" : this.multisiteForm.controls['_WDepth'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_AST'] && this.multisiteForm.controls['_AST'].value){
        let modelData = { "inputId": "_AST", "value" : this.multisiteForm.controls['_AST'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_GWDepth'] && this.multisiteForm.controls['_GWDepth'].value){
        let modelData = { "inputId": "_GWDepth", "value" : this.multisiteForm.controls['_GWDepth'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_W_Ft'] && this.multisiteForm.controls['_W_Ft'].value){
        let modelData = { "inputId": "_W_Ft", "value" : this.multisiteForm.controls['_W_Ft'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Conf'] && this.multisiteForm.controls['_Conf'].value){
        let modelData = { "inputId": "_Conf", "value" : this.multisiteForm.controls['_Conf'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Unconsolid'] && this.multisiteForm.controls['_Unconsolid'].value){
        let modelData = { "inputId": "_Unconsolid", "value" : this.multisiteForm.controls['_Unconsolid'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_SnglUse'] && this.multisiteForm.controls['_SnglUse'].value){
        let modelData = { "inputId": "_SnglUse", "value" : this.multisiteForm.controls['_SnglUse'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Ext_Well_YN'] && this.multisiteForm.controls['_Ext_Well_YN'].value){
        let modelData = { "inputId": "_Ext_Well_YN", "value" : this.multisiteForm.controls['_Ext_Well_YN'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_HC'] && this.multisiteForm.controls['_HC'].value){
        let modelData = { "inputId": "_HC", "value" : this.multisiteForm.controls['_HC'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Ext_Well_Dia'] && this.multisiteForm.controls['_Ext_Well_Dia'].value){
        let modelData = { "inputId": "_Ext_Well_Dia", "value" : this.multisiteForm.controls['_Ext_Well_Dia'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_WNum_Ext_Well'] && this.multisiteForm.controls['_WNum_Ext_Well'].value){
        let modelData = { "inputId": "_WNum_Ext_Well", "value" : this.multisiteForm.controls['_WNum_Ext_Well'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Ext_Well_Mthd'] && this.multisiteForm.controls['_Ext_Well_Mthd'].value){
        let modelData = { "inputId": "_Ext_Well_Mthd", "value" : this.multisiteForm.controls['_Ext_Well_Mthd'].value };
        this.argument_array.push(modelData);
      }

      if(this.multisiteForm.controls['_P_GPM'] && this.multisiteForm.controls['_P_GPM'].value){
        let modelData = { "inputId": "_P_GPM", "value" : this.multisiteForm.controls['_P_GPM'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_P_CFM_Ext'] && this.multisiteForm.controls['_P_CFM_Ext'].value){
        let modelData = { "inputId": "_P_CFM_Ext", "value" : this.multisiteForm.controls['_P_CFM_Ext'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Inj_Well_YN'] && this.multisiteForm.controls['_Inj_Well_YN'].value){
        let modelData = { "inputId": "_Inj_Well_YN", "value" : this.multisiteForm.controls['_Inj_Well_YN'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_GWInj_YN'] && this.multisiteForm.controls['_GWInj_YN'].value){
        let modelData = { "inputId": "_GWInj_YN", "value" : this.multisiteForm.controls['_GWInj_YN'].value };
        this.argument_array.push(modelData);
      }

      if(this.multisiteForm.controls['_Inj_Well_Dia'] && this.multisiteForm.controls['_Inj_Well_Dia'].value){
        let modelData = { "inputId": "_Inj_Well_Dia", "value" : this.multisiteForm.controls['_Inj_Well_Dia'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_WNum_Inj_Well'] && this.multisiteForm.controls['_WNum_Inj_Well'].value){
        let modelData = { "inputId": "_WNum_Inj_Well", "value" : this.multisiteForm.controls['_WNum_Inj_Well'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Inj_Well_Mthd'] && this.multisiteForm.controls['_Inj_Well_Mthd'].value){
        let modelData = { "inputId": "_Inj_Well_Mthd", "value" : this.multisiteForm.controls['_Inj_Well_Mthd'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_P_CFM_Inj'] && this.multisiteForm.controls['_P_CFM_Inj'].value){
        let modelData = { "inputId": "_P_CFM_Inj", "value" : this.multisiteForm.controls['_P_CFM_Inj'].value };
        this.argument_array.push(modelData);
      }

      if(this.multisiteForm.controls['_Ops_Yr'] && this.multisiteForm.controls['_Ops_Yr'].value){
        let modelData = { "inputId": "_Ops_Yr", "value" : this.multisiteForm.controls['_Ops_Yr'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_YN_Equip_Encl'] && this.multisiteForm.controls['_YN_Equip_Encl'].value){
        let modelData = { "inputId": "_YN_Equip_Encl", "value" : this.multisiteForm.controls['_YN_Equip_Encl'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_YN_Trailr_Blw_Sys'] && this.multisiteForm.controls['_YN_Trailr_Blw_Sys'].value){
        let modelData = { "inputId": "_YN_Trailr_Blw_Sys", "value" : this.multisiteForm.controls['_YN_Trailr_Blw_Sys'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Process_Samp_YN'] && this.multisiteForm.controls['_Process_Samp_YN'].value){
        let modelData = { "inputId": "_Process_Samp_YN", "value" : this.multisiteForm.controls['_Process_Samp_YN'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NUM_PH4_Proc_Smpl_Air'] && this.multisiteForm.controls['_NUM_PH4_Proc_Smpl_Air'].value){
        let modelData = { "inputId": "_NUM_PH4_Proc_Smpl_Air", "value" : this.multisiteForm.controls['_NUM_PH4_Proc_Smpl_Air'].value };
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
      if(this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Air'] && this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Air'].value){
        let modelData = { "inputId": "_NUM_Ph6_Proc_Smpl_Air", "value" : this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Air'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Lqd'] && this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Lqd'].value){
        let modelData = { 'inputId': "_NUM_Ph6_Proc_Smpl_Lqd", 'value' : this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Lqd'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Solid'] && this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Solid'].value){
        let modelData = { "inputId": "_NUM_Ph6_Proc_Smpl_Solid", "value" : this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Solid'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_P_CFM'] && this.multisiteForm.controls['_P_CFM'].value){
        let modelData = { "inputId": "_P_CFM", "value" : this.multisiteForm.controls['_P_CFM'].value };
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
      if(this.multisiteForm.controls['_Well_Drill_Dia'] && this.multisiteForm.controls['_Well_Drill_Dia'].value){
        let modelData = { "inputId": "_Well_Drill_Dia", "value" : this.multisiteForm.controls['_Well_Drill_Dia'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_Prcnt_NH_Drill_C'] && this.multisiteForm.controls['_Prcnt_NH_Drill_C'].value){
        let modelData = { "inputId": "_Prcnt_NH_Drill_C", "value" : this.multisiteForm.controls['_Prcnt_NH_Drill_C'].value };
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
      if(this.multisiteForm.controls['_NH_SW_OM'] && this.multisiteForm.controls['_NH_SW_OM'].value){
        let modelData = { "inputId": "_NH_SW_OM", "value" : this.multisiteForm.controls['_NH_SW_OM'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_NH_LW_OM'] && this.multisiteForm.controls['_NH_LW_OM'].value){
        let modelData = { "inputId": "_NH_LW_OM", "value" : this.multisiteForm.controls['_NH_LW_OM'].value };
        this.argument_array.push(modelData);
      }
      
      if(this.multisiteForm.controls['_SW_Bulk_OM'] && this.multisiteForm.controls['_SW_Bulk_OM'].value){
        let modelData = { "inputId": "_SW_Bulk_OM", "value" : this.multisiteForm.controls['_SW_Bulk_OM'].value };
        this.argument_array.push(modelData);
      }
      if(this.multisiteForm.controls['_O_M_KGPY_Wtr'] && this.multisiteForm.controls['_O_M_KGPY_Wtr'].value){
        let modelData = { "inputId": "_O_M_KGPY_Wtr", "value" : this.multisiteForm.controls['_O_M_KGPY_Wtr'].value };
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
      this.modelresponseService.submitModel(1012,this.pid,data)
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
