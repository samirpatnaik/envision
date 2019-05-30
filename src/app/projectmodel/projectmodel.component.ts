import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare function isNumberKey(evt:any): any;

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
    this.multisiteForm = this.formBuilder.group({
      IRA: ['', Validators.required],
      fiveyrRevOpt: ['5', [Validators.required, Validators.min(0.01), Validators.max(10.00)]],
      fiveyrRevLtm: ['5', [Validators.required, Validators.min(0.01), Validators.max(10.00)]],
      fiveyrReview: ['5', [Validators.required, Validators.min(0.01)]],
      avgArea: ['5', [Validators.required, Validators.min(0.01)]],
      siteSimpleCount: ['0', [Validators.required, Validators.min(0.01), Validators.max(4.00)]],
      procSimpleCount: ['0', [Validators.required, Validators.min(0.01), Validators.max(3.00)]],
      PL: [''],
      mgmtCmplx:[''],
      protAll:[''],
      CAF: ['5', [Validators.min(0.5), Validators.max(2.00)]],
      EYr:['0'],
      ACFVal:['0.00'],
      MK01:['1.00', [Validators.min(1), Validators.max(5)]],
      MK02:['1.00', [Validators.min(1), Validators.max(5)]],
      MK03:['1.00', [Validators.min(1), Validators.max(5)]],
      MK04:['0.00'],
      MK05:['1.00', [Validators.min(1), Validators.max(1.2)]],
      MK06:['0.00'],
      MK07:['1.00', [Validators.min(1), Validators.max(3)]],
      MK08:['1.00', [Validators.min(1), Validators.max(1.2)]],
      MK09:['1.00', [Validators.min(1), Validators.max(1.5)]],
      MK10:['0.00'],
      MK11:['0.00'],
      MK12:['1.00', [Validators.min(1), Validators.max(1.5)]],
    });    
    isNumberKey(event);

  }

  get f() { return this.multisiteForm.controls; }

  submit_multisiteForm() {
    this.submitted = true;
    if (this.multisiteForm.invalid) {
      return;
    } else {
      console.log('all good');
      /*this.menugrouplistservice.addMenuGroupItem(this.menugroupForm.value)
      .subscribe(result =>{
        setTimeout(() => {
          this.location.back();
        }, 1000);  //1s
      });*/
    }
  }

}
