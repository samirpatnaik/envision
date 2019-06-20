import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.create_form();
    isNumberKey(event);

  }

  create_form(){
    this.multisiteForm = this.formBuilder.group({
      _IRA: ['N'],
      _Num_5_Yr_Rev_Ops: ['', [ Validators.min(0.01), Validators.max(10.00)]],
      _Num_5_Yr_Rev_LTM: ['5', [ Validators.min(0.01), Validators.max(10.00)]],
      _Num_Sites: ['5', [ Validators.min(0.01)]],
      _Avg_Area: ['5', [ Validators.min(0.01)]],
      _Site_Smpl_Count: ['0.01', [ Validators.min(0.01), Validators.max(4.00)]],
      _Proc_Smpl_Count: ['0.01', [ Validators.min(0.01), Validators.max(3.00)]],
      _PL_w_Cost_Basis: ['N'],
      _Treat_Cmplx:[''],
      _Prot_All:[''],
      _CAF: ['0.5', [Validators.min(0.5), Validators.max(2.00)]],
      _E_Yr:['0'],
      _ACF_Val:['0.00'],
      _MK_01:['1.00', [Validators.min(1), Validators.max(5)]],
      _MK_02:['1.00', [Validators.min(1), Validators.max(5)]],
      _MK_03:['1.00', [Validators.min(1), Validators.max(5)]],
      _MK_04:['0.00'],
      _MK_05:['1.00', [Validators.min(1), Validators.max(1.2)]],
      _MK_06:['0.00'],
      _MK_07:['1.00', [Validators.min(1), Validators.max(3)]],
      _MK_08:['1.00', [Validators.min(1), Validators.max(1.2)]],
      _MK_09:['1.00', [Validators.min(1), Validators.max(1.5)]],
      _MK_10:['0.00'],
      _MK_11:['0.00'],
      _MK_12:['1.00', [Validators.min(1), Validators.max(1.5)]],
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
    /*this.multisiteForm.valueChanges.subscribe(value => {
      // whole form object is in value and it's called every time any form field changes.
      console.log(value);
    });*/
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
      console.log(this.multisiteForm.value);
      /*this.menugrouplistservice.addMenuGroupItem(this.menugroupForm.value)
      .subscribe(result =>{
        setTimeout(() => {
          this.location.back();
        }, 1000);  //1s
      });*/
      //this.create_form();
      //this.submitted = false;
    }
  }

}
