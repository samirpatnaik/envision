import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {Observable} from 'rxjs';
import { ModelresponseService } from '../services/modelresponse.service';

import {ModelList} from './model-list'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent  implements OnInit{

    message: string;
    submitted = false;

    model$: Observable<any>;
   listmodelForm: FormGroup;

    searchTerm = '';
    modellist_options:ModelList[];
    inputSearch: any = { name: '' };

    

  constructor(private router:Router,  private _http:HttpClient,private formBuilder: FormBuilder, private filterPipe: FilterPipe, private modelresponseService: ModelresponseService) {
      this.listmodelForm = this.formBuilder.group({
        listoption: [''],
        project_title: ['', Validators.required],
        project_description: ['', Validators.required]
      });
     
     // this.model$ = _http.get("assets/modelresponse/ListOfModels.json");
      this.addModeloptions(); 
}
  ngOnInit() { 
    
  }

  private addModeloptions() {
    this.modelresponseService.getModel()
      .subscribe(data => {
        this.modellist_options = data.model;
      }
    ); 

   /* this.model$.subscribe(data => {    
        this.modellist_options = data.model;
      }
    );*/
  }

  // convenience getter for easy access to form fields
 get f() { return this.listmodelForm.controls; }

  listOptionClick(){
    this.submitted = true;
      if (this.listmodelForm.invalid) {
        return;
      }else if(this.listmodelForm.controls['listoption'].value == ''){
        this.message = 'Please select any Model Name to proceed';
      } else {
       // console.log(this.listmodelForm.controls['listoption'].value);
        this.router.navigate(["/projectmodel/"+this.listmodelForm.controls['listoption'].value]);
      }
  }

}
