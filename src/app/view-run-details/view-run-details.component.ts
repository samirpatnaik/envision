import { Component, OnInit } from '@angular/core';
import { ModelresponseService } from '../services/modelresponse.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as jsPDF from 'jspdf'; 
import html2canvas from 'html2canvas';
import * as $ from 'jquery';

@Component({
  selector: 'app-view-run-details',
  templateUrl: './view-run-details.component.html',
  styleUrls: ['./view-run-details.component.css']
})
export class ViewRunDetailsComponent implements OnInit {

  constructor(private _model:ModelresponseService, private spinner: NgxSpinnerService, private route: ActivatedRoute, private _router: Router, private sanitizer: DomSanitizer) { }

  displaystring:any;
  modelId: any;
  id: any;
  response: any;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('pid');

    this.spinner.show();
    this._model.viewrundetails(this.id).subscribe(
      qinfo =>{
        //console.log(qinfo);
        //this.projectrunInfo = qinfo.output;
        this.modelId = qinfo.modelId;
       
        this.displaystring = this.sanitizer.bypassSecurityTrustHtml(qinfo.displayString);
  
        setTimeout(() => {
          this.spinner.hide();
        }, 0);
      });
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

      var doc = new jsPDF("p", "pt", "[PDF_Width, PDF_Height]"),
      source = $("#project-result")[0],
      margins = {
        top: 60,
        bottom: 20,
        left: 40,
        width: HTML_Width
      };
      doc.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, {
          // y coord
          width: margins.width // max width of content on PDF
        },
        function() {
          // dispose: object with X, Y of the last line add to the PDF
          //          this allow the insertion of new lines after html
          doc.save("ProjectResult.pdf");
        },
        margins
      );
     // pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
      
    /*  for (var i = 1; i <= totalPDFPages; i++) { 
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
      }
      pdf.save("ProjectResult.pdf");*/
    });

  }
}
