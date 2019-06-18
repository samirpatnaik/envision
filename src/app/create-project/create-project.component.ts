import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {Observable} from 'rxjs';

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

    

  constructor(private router:Router,  private _http:HttpClient,private formBuilder: FormBuilder, private filterPipe: FilterPipe) {
      this.listmodelForm = this.formBuilder.group({
        listoption: [''],
        project_title: [''],
        project_description: ['']
      });
     
      this.model$ = _http.get("assets/modelresponse/ListOfModels.json");
      this.addModeloptions(); 
}
  ngOnInit() { 
    
  }

  private addModeloptions() {
    
    this.model$.subscribe(data => {    
        this.modellist_options = data.model;
      }
    );
  }

  // convenience getter for easy access to form fields
 get f() { return this.listmodelForm.controls; }

  listOptionClick(){
    this.submitted = true;
      if (this.listmodelForm.invalid) {
        return;
      } else {
        //console.log(this.listmodelForm.value);
        this.router.navigate(['/projectmodel']);
      }
  }

}
