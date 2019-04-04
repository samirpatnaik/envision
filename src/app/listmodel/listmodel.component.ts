import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listmodel',
  templateUrl: './listmodel.component.html',
  styleUrls: ['./listmodel.component.css']
})
export class ListmodelComponent implements OnInit {

  constructor(private router:Router,              
    private formBuilder: FormBuilder) {  }

    listmodelForm: FormGroup;
    message: string;
    submitted = false;
  
  ngOnInit() {
    this.listmodelForm = this.formBuilder.group({
      listoption: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.listmodelForm.controls; }


  listOptionClick(){
    this.submitted = true;
      if (this.listmodelForm.invalid) {
        return;
      } else {
        this.router.navigate(['/MultiSiteCERCLA']);
      }
  }
  
}
