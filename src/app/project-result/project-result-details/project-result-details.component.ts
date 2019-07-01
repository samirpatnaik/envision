import { Component, OnInit } from '@angular/core';
import { ModelresponseService } from '../../services/modelresponse.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-result-details',
  templateUrl: './project-result-details.component.html',
  styleUrls: ['./project-result-details.component.css']
})
export class ProjectResultDetailsComponent implements OnInit {

  constructor(private modelresponseService: ModelresponseService, private sanitizer: DomSanitizer) { }
  displaystring: any;

  ngOnInit() {
    this.modelresponseService.apiData$.subscribe(data => {
      this.displaystring = this.sanitizer.bypassSecurityTrustHtml(data.displayString);
  });

   /* this.modelresponseService.getJSON().subscribe(data => {
      this.displaystring = this.sanitizer.bypassSecurityTrustHtml(data.displayString);
  });*/

  }

}
