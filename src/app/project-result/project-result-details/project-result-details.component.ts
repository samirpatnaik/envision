import { Component, OnInit } from '@angular/core';
import { ModelresponseService } from '../../services/modelresponse.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsPDF from 'jspdf'; 
import html2canvas from 'html2canvas';
import * as $ from 'jquery';

@Component({
  selector: 'app-project-result-details',
  templateUrl: './project-result-details.component.html',
  styleUrls: ['./project-result-details.component.css']
})
export class ProjectResultDetailsComponent implements OnInit {

  constructor(private modelresponseService: ModelresponseService, private sanitizer: DomSanitizer) { }
  displaystring: any;
  pdfstring= false;
  ngOnInit() {
    this.modelresponseService.apiData$.subscribe(data => {
      this.pdfstring = data.displayString;
      this.displaystring = this.sanitizer.bypassSecurityTrustHtml(data.displayString);
      this.pdfstring = true; // set to true for showing the Export to PDF button
  });
   /* this.modelresponseService.getJSON().subscribe(data => {
      this.displaystring = this.sanitizer.bypassSecurityTrustHtml(data.displayString);
  });*/
  }

  exportPDF(){
    var HTML_Width = $("#project-result").width();
    var HTML_Height = $("#project-result").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width+(top_left_margin*2);
    var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
    
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

    html2canvas($("#project-result")[0],{allowTaint:true}).then(function(canvas) {

      canvas.getContext('2d');
 
      console.log(canvas.height+"  "+canvas.width);
      
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
      
      for (var i = 1; i <= totalPDFPages; i++) { 
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
      }
      pdf.save("ProjectResult.pdf");
    });

  }
}
