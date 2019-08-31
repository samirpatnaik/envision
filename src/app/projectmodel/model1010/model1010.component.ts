import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModelresponseService } from '../../services/modelresponse.service';

declare function isNumberKey(evt:any): any;
import $ from 'jquery';

@Component({
  selector: 'app-model1010',
  templateUrl: './model1010.component.html',
  styleUrls: ['./model1010.component.css']
})
export class Model1010Component implements OnInit {

  multisiteForm: FormGroup;
  submitted = false;
  id : any;
  data : any;
  response: any;
  pagetitle: String;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private modelresponseService: ModelresponseService, private _router: Router) { }

  ngOnInit() {
    this.create_form();
    isNumberKey(event);
  }

  create_form(){
    this.multisiteForm = this.formBuilder.group({
      _IRA: ['N'],
      _ST: [''],
      _WDepth: ['', [ Validators.min(11.00), Validators.max(210.00)]],
      _AST : ['', [ Validators.min(0.01), Validators.max(200.00)]],
      _W_Ft : ['', [ Validators.min(25.00), Validators.max(500.00)]],
      _GWDepth : ['', [ Validators.min(3.00), Validators.max(200.00)]],
      _P_Area : ['', [ Validators.min(0.01)]],
      _Conf: ['N'],
      _Unconsolid: ['Y'],
      _HC: ['', [ Validators.min(5.04), Validators.max(500.00)]],
      _RHG: ['', [ Validators.min(5.04), Validators.max(500.00)]],
      _STF: [''],
      _ATF: [''],
      _Ext_Well_Dia: ['', [ Validators.min(1.00), Validators.max(16.00)]],
      _WNum_Ext_Well: ['', [ Validators.min(1.00), Validators.max(200.00)]],
      _Ext_Well_Mthd: [''],
      _P_GPM: ['', [ Validators.min(1.00), Validators.max(500.00)]],
      _P_CFM_Ext: ['', [ Validators.min(20.00), Validators.max(5000.00)]],
      _GWInj_YN: ['N'],
      _Well_Type_Inj: [''],
      _Inj_Well_Dia: ['', [ Validators.min(1.00), Validators.max(16.00)]],
      _WNum_Inj_Well: ['', [ Validators.min(0.01), Validators.max(500.00)]],
      _Inj_Well_Mthd: [''],
      _P_CFM_Inj: ['', [ Validators.min(20.00), Validators.max(5000.00)]],
      _YN_Equip_Encl: ['N'],
      _YN_Trailr_Blw_Sys: ['Y'],
      _Incl_Perf_Samp: ['N'],
      _Mon_Well_Dia:['', [ Validators.min(1.00), Validators.max(16.00)]],
      _Mon_Well_Mthd:[''],
      _Well_Type_Mon: [''],
      _Num_Mon_Well_Usr:['', [ Validators.min(0.01), Validators.max(200.00)]],
      _Num_Mon_Well:['', [ Validators.min(0.01), Validators.max(200.00)]],
      _Ancil_Well_Mthd:[''],
      _WNum_Vad_Mon_Usr:['', [Validators.min(0.01), Validators.max(50.00)]],
      _WNum_Vad_Mon:['', [Validators.min(0.01), Validators.max(50.00)]],
      _Num_Air_Loc:['', [Validators.min(0.01), Validators.max(200.00)]],
      _Num_Mon_Well_Smpl:['', [Validators.min(0.01), Validators.max(200.00)]],
      _Num_SW_Points:['', [Validators.min(0.01), Validators.max(200.00)]],
      _Num_Surf_Loc:['', [Validators.min(0.01), Validators.max(2500.00)]],
      _NUM_Surf_Per_Loc:['', [Validators.min(0.01), Validators.max(2500.00)]],
      _Num_Sed_Points:['', [Validators.min(0.01), Validators.max(200.00)]],
      _Num_Soil_Borings:['', [Validators.min(0.01), Validators.max(200.00)]],
      _WNum_Vad_Mon_Smpl:['', [Validators.min(0.01), Validators.max(50.00)]],
      _NUM_Eco_Samp:['', [Validators.min(0.01), Validators.max(200.00)]],
      _Ops_Yr:['', [Validators.min(0.01), Validators.max(30.00)]],
      _SnglUse:[''],
      _Num_Samp_Event:[''],
      _NUM_Surf:['', [Validators.min(0.01), Validators.max(2500.00)]],
      _Process_Samp_YN:['Y'],
      _NUM_Ph4_Proc_Smpl_Air : ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph4_Proc_Smpl_Lqd: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph4_Proc_Smpl_Solid : ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph6_Proc_Smpl_Air: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph6_Proc_Smpl_Lqd : ['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Ph6_Proc_Smpl_Solid: ['', [Validators.min(0.01), Validators.max(5000.00)]],
      
      _P_CFM: ['', [Validators.min(200), Validators.max(500.00)]],
      _Num_Ports : ['', [Validators.min(0.01), Validators.max(20.00)]],
      _NUM_Air:[''],
      _NUM_GW:['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_SW:['', [Validators.min(0.01), Validators.max(2500.00)]],
      _NUM_Soil:['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Soil_Gas:['', [Validators.min(0.01), Validators.max(5000.00)]],
      _NUM_Sed:['', [Validators.min(0.01), Validators.max(2500.00)]],
      _VOC:['Y'],
      _VOC_Gas:['Y'],
      _SVOC:['N'],
      _SVOC_Gas:['N'],
      _PCB:['N'],
      _PCB_Gas:['N'],
      _MC: ['N'],
      _TAL_Mtl:['Y'],
      _MNA:['N'],
      _NUM_MNA:[''],
      _Sum_Samp_Day:[''],
      _Well_Drill_Dia:['', [Validators.min(1.00), Validators.max(16.00)]],
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
      _Phase6_Req:['Y'],
      _Phase7_Req:['N'],
      _Land_Use:['N'],
      _Engr_Cntl:['N'],
      _L_Ft_F_Input: ['', [Validators.min(100.00), Validators.max(10000.00)]],
      _RACR_YN:['N'],
      _Prot_All:[''],
      _CAF:['', [Validators.min(0.5), Validators.max(2.00)]],
      _E_Yr:[''],
      
      _ACF_Val:[''],
      _MK_01:['', [Validators.min(1.00), Validators.max(5.00)]],
      _MK_02:['', [Validators.min(1.00), Validators.max(5.00)]],
      _MK_03:['', [Validators.min(1.00), Validators.max(1.50)]],
      _MK_04:[''],
      _MK_05:['', [Validators.min(1.00), Validators.max(1.20)]],
      _MK_06:[''],
      _MK_07:['', [Validators.min(1.00), Validators.max(3.00)]],
      _MK_08:['', [Validators.min(1.00), Validators.max(1.20)]],
      _MK_09:['', [Validators.min(0.5), Validators.max(2.00)]],
      _MK_10:[''],
      _MK_11:[''],
      _MK_12:['', [Validators.min(1.00), Validators.max(1.50)]],
      
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

  validate_required(){
    this.submitted = true;
    if (this.multisiteForm.invalid) {
      return;
    }else{
      document.getElementById('sec').click();
    }
  }
  validate_secondary(){
    this.submitted = true;
    if (this.multisiteForm.invalid) {
      return;
    }else{
      document.getElementById('ter').click();
    }
  }
  
  submit_multisiteForm() {
    this.submitted = true;
    if (this.multisiteForm.invalid) {
      return;
    } else {
      
      let data = { "argument":[ 
        { "inputId": "_IRA", "value" : this.multisiteForm.controls['_IRA'].value },
        { "inputId": "_ST", "value" : this.multisiteForm.controls['_ST'].value },
        { "inputId": "_WDepth", "value" : this.multisiteForm.controls['_WDepth'].value },
        { "inputId": "_AST", "value" : this.multisiteForm.controls['_AST'].value },
        { "inputId": "_W_Ft", "value" : this.multisiteForm.controls['_W_Ft'].value },
        { "inputId": "_GWDepth", "value" : this.multisiteForm.controls['_GWDepth'].value },
        { "inputId": "_P_Area", "value" : this.multisiteForm.controls['_P_Area'].value },
        { "inputId": "_Conf", "value" : this.multisiteForm.controls['_Conf'].value },
        { "inputId": "_Unconsolid", "value" : this.multisiteForm.controls['_Unconsolid'].value },
        { "inputId": "_HC", "value" : this.multisiteForm.controls['_HC'].value },
        { "inputId": "_RHG", "value" : this.multisiteForm.controls['_RHG'].value },
        { "inputId": "_STF", "value" : this.multisiteForm.controls['_STF'].value },
        { "inputId": "_ATF", "value" : this.multisiteForm.controls['_ATF'].value },
        { "inputId": "_Ext_Well_Dia", "value" : this.multisiteForm.controls['_Ext_Well_Dia'].value },
        { "inputId": "_WNum_Ext_Well", "value" : this.multisiteForm.controls['_WNum_Ext_Well'].value },
        { "inputId": "_Ext_Well_Mthd", "value" : this.multisiteForm.controls['_Ext_Well_Mthd'].value },
        { "inputId": "_P_GPM", "value" : this.multisiteForm.controls['_P_GPM'].value },
        { "inputId": "_P_CFM_Ext", "value" : this.multisiteForm.controls['_P_CFM_Ext'].value },
        { "inputId": "_GWInj_YN", "value" : this.multisiteForm.controls['_GWInj_YN'].value },
        { "inputId": "_Well_Type_Inj", "value" : this.multisiteForm.controls['_Well_Type_Inj'].value },
        { "inputId": "_Inj_Well_Dia", "value" : this.multisiteForm.controls['_Inj_Well_Dia'].value },
        { "inputId": "_WNum_Inj_Well", "value" : this.multisiteForm.controls['_WNum_Inj_Well'].value },
        { "inputId": "_Inj_Well_Mthd", "value" : this.multisiteForm.controls['_Inj_Well_Mthd'].value },
        { "inputId": "_P_CFM_Inj", "value" : this.multisiteForm.controls['_P_CFM_Inj'].value },
        { "inputId": "_YN_Equip_Encl", "value" : this.multisiteForm.controls['_YN_Equip_Encl'].value },
        { "inputId": "_YN_Trailr_Blw_Sys", "value" : this.multisiteForm.controls['_YN_Trailr_Blw_Sys'].value },
        { "inputId": "_Incl_Perf_Samp", "value" : this.multisiteForm.controls['_Incl_Perf_Samp'].value },
        { "inputId": "_Mon_Well_Dia", "value" : this.multisiteForm.controls['_Mon_Well_Dia'].value },
        { "inputId": "_Mon_Well_Mthd", "value" : this.multisiteForm.controls['_Mon_Well_Mthd'].value },
        { "inputId": "_Well_Type_Mon", "value" : this.multisiteForm.controls['_Well_Type_Mon'].value },
        { "inputId": "_Num_Mon_Well_Usr", "value" : this.multisiteForm.controls['_Num_Mon_Well_Usr'].value },
        { "inputId": "_Num_Mon_Well", "value" : this.multisiteForm.controls['_Num_Mon_Well'].value },
        { "inputId": "_Ancil_Well_Mthd", "value" : this.multisiteForm.controls['_Ancil_Well_Mthd'].value },
        { "inputId": "_WNum_Vad_Mon_Usr", "value" : this.multisiteForm.controls['_WNum_Vad_Mon_Usr'].value },
        { "inputId": "_WNum_Vad_Mon", "value" : this.multisiteForm.controls['_WNum_Vad_Mon'].value },
        { "inputId": "_Num_Air_Loc", "value" : this.multisiteForm.controls['_Num_Air_Loc'].value },
        { "inputId": "_Num_Mon_Well_Smpl", "value" : this.multisiteForm.controls['_Num_Mon_Well_Smpl'].value },
        { "inputId": "_Num_SW_Points", "value" : this.multisiteForm.controls['_Num_SW_Points'].value },
        { "inputId": "_Num_Surf_Loc", "value" : this.multisiteForm.controls['_Num_Surf_Loc'].value },
        { "inputId": "_NUM_Surf_Per_Loc", "value" : this.multisiteForm.controls['_NUM_Surf_Per_Loc'].value },
        { "inputId": "_Num_Sed_Points", "value" : this.multisiteForm.controls['_Num_Sed_Points'].value },
        { "inputId": "_Num_Soil_Borings", "value" : this.multisiteForm.controls['_Num_Soil_Borings'].value },
        { "inputId": "_WNum_Vad_Mon_Smpl", "value" : this.multisiteForm.controls['_WNum_Vad_Mon_Smpl'].value },
        { "inputId": "_NUM_Eco_Samp", "value" : this.multisiteForm.controls['_NUM_Eco_Samp'].value },
        { "inputId": "_Ops_Yr", "value" : this.multisiteForm.controls['_Ops_Yr'].value },
        { "inputId": "_SnglUse", "value" : this.multisiteForm.controls['_SnglUse'].value },
        { "inputId": "_Num_Samp_Event", "value" : this.multisiteForm.controls['_Num_Samp_Event'].value },
        { "inputId": "_NUM_Surf", "value" : this.multisiteForm.controls['_NUM_Surf'].value },
        { "inputId": "_Process_Samp_YN", "value" : this.multisiteForm.controls['_Process_Samp_YN'].value },
        { "inputId": "_NUM_Ph4_Proc_Smpl_Air", "value" : this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Air'].value },
        { "inputId": "_NUM_Ph4_Proc_Smpl_Lqd", "value" : this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Lqd'].value },
        { "inputId": "_NUM_Ph4_Proc_Smpl_Solid", "value" : this.multisiteForm.controls['_NUM_Ph4_Proc_Smpl_Solid'].value },
        { "inputId": "_NUM_Ph6_Proc_Smpl_Air", "value" : this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Air'].value },
        { "inputId": "_NUM_Ph6_Proc_Smpl_Lqd", "value" : this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Lqd'].value },
        { "inputId": "_NUM_Ph6_Proc_Smpl_Solid", "value" : this.multisiteForm.controls['_NUM_Ph6_Proc_Smpl_Solid'].value },
        { "inputId": "_P_CFM", "value" : this.multisiteForm.controls['_P_CFM'].value },
        { "inputId": "_Num_Ports", "value" : this.multisiteForm.controls['_Num_Ports'].value },
        { "inputId": "_NUM_Air", "value" : this.multisiteForm.controls['_NUM_Air'].value },
        { "inputId": "_NUM_GW", "value" : this.multisiteForm.controls['_NUM_GW'].value },
        { "inputId": "_NUM_SW", "value" : this.multisiteForm.controls['_NUM_SW'].value },
        { "inputId": "_NUM_Soil", "value" : this.multisiteForm.controls['_NUM_Soil'].value },
        { "inputId": "_NUM_Soil_Gas", "value" : this.multisiteForm.controls['_NUM_Soil_Gas'].value },
        { "inputId": "_NUM_Sed", "value" : this.multisiteForm.controls['_NUM_Sed'].value },
        { "inputId": "_VOC", "value" : this.multisiteForm.controls['_VOC'].value },
        { "inputId": "_VOC_Gas", "value" : this.multisiteForm.controls['_VOC_Gas'].value },
        { "inputId": "_SVOC", "value" : this.multisiteForm.controls['_SVOC'].value },
        { "inputId": "_SVOC_Gas", "value" : this.multisiteForm.controls['_SVOC_Gas'].value },
        { "inputId": "_PCB", "value" : this.multisiteForm.controls['_PCB'].value },
        { "inputId": "_PCB_Gas", "value" : this.multisiteForm.controls['_PCB_Gas'].value },
        { "inputId": "_MC", "value" : this.multisiteForm.controls['_MC'].value },
        { "inputId": "_TAL_Mtl", "value" : this.multisiteForm.controls['_TAL_Mtl'].value },
        { "inputId": "_MNA", "value" : this.multisiteForm.controls['_MNA'].value },
        { "inputId": "_NUM_MNA", "value" : this.multisiteForm.controls['_NUM_MNA'].value },
        { "inputId": "_Sum_Samp_Day", "value" : this.multisiteForm.controls['_Sum_Samp_Day'].value },
        { "inputId": "_Well_Drill_Dia", "value" : this.multisiteForm.controls['_Well_Drill_Dia'].value },
        { "inputId": "_Prcnt_NH_Drill_C", "value" : this.multisiteForm.controls['_Prcnt_NH_Drill_C'].value },
        { "inputId": "_Moist", "value" : this.multisiteForm.controls['_Moist'].value },
        { "inputId": "_Den", "value" : this.multisiteForm.controls['_Den'].value },
        { "inputId": "_NH_SW_Con", "value" : this.multisiteForm.controls['_NH_SW_Con'].value },
        { "inputId": "_NH_LW_Con", "value" : this.multisiteForm.controls['_NH_LW_Con'].value },
        { "inputId": "_SW_Bulk_Con", "value" : this.multisiteForm.controls['_SW_Bulk_Con'].value },
        { "inputId": "_LW_Bulk_Con", "value" : this.multisiteForm.controls['_LW_Bulk_Con'].value },
        { "inputId": "_SW_Drm_Con", "value" : this.multisiteForm.controls['_SW_Drm_Con'].value },
        { "inputId": "_LW_Drm_Con", "value" : this.multisiteForm.controls['_LW_Drm_Con'].value },
        { "inputId": "_Const_KGPY_Wtr", "value" : this.multisiteForm.controls['_Const_KGPY_Wtr'].value },
        { "inputId": "_NH_SW_OM", "value" : this.multisiteForm.controls['_NH_SW_OM'].value },
        { "inputId": "_NH_LW_OM", "value" : this.multisiteForm.controls['_NH_LW_OM'].value },
        { "inputId": "_SW_Bulk_OM", "value" : this.multisiteForm.controls['_SW_Bulk_OM'].value },
        { "inputId": "_O_M_KGPY_Wtr", "value" : this.multisiteForm.controls['_O_M_KGPY_Wtr'].value },
        { "inputId": "_Phase3_Req", "value" : this.multisiteForm.controls['_Phase3_Req'].value },
        { "inputId": "_Phase4_Req", "value" : this.multisiteForm.controls['_Phase4_Req'].value },
        { "inputId": "_Phase6_Req", "value" : this.multisiteForm.controls['_Phase6_Req'].value },
        { "inputId": "_Phase7_Req", "value" : this.multisiteForm.controls['_Phase7_Req'].value },
        { "inputId": "_Land_Use", "value" : this.multisiteForm.controls['_Land_Use'].value },
        { "inputId": "_Engr_Cntl", "value" : this.multisiteForm.controls['_Engr_Cntl'].value },
        { "inputId": "_L_Ft_F_Input", "value" : this.multisiteForm.controls['_L_Ft_F_Input'].value },
        { "inputId": "_RACR_YN", "value" : this.multisiteForm.controls['_RACR_YN'].value },
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
      this.modelresponseService.submitModel(1010,data)
      .subscribe(result =>{
        this.response = result;
        // set data in service which is to be shared
        this.modelresponseService.setData(this.response)
        this._router.navigate(["/projectresult"]);
      });
    }
  }
}
