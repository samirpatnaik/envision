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
        this.modellist_options = data;
      }
    ); 
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
        let projectdata = { 
          "name": this.listmodelForm.controls['project_title'].value,
          "description": this.listmodelForm.controls['project_description'].value,
          "modelId": this.listmodelForm.controls['listoption'].value
       };
        // console.log(registerdata);
        this.modelresponseService.saveproject(projectdata)
        .subscribe(reponseObject=>{
          let projectData = (reponseObject['body']['id']);
          //console.log("Response1", reponseObject.body);
          //console.log("Response2", projectData);
        if(reponseObject.statusText == 'OK' && projectData){
          this.router.navigate(["/projectmodel/"+this.listmodelForm.controls['listoption'].value+"/"+ projectData+"/newrun"]); 
        }
        }, err => {
        console.log(err);
        this.message = err.error.message;
        });
       // console.log(this.listmodelForm.controls['listoption'].value);
      }
  }

}
