import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { environment } from '../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare function isNumberKey(evt:any): any;

@Component({
  selector: 'app-payment-module',
  templateUrl: './payment-module.component.html',
  styleUrls: ['./payment-module.component.css']
})
export class PaymentModuleComponent implements OnInit {

  paymentForm: FormGroup;
  submitted = false;
  strMessage: string;
  constructor(private formBuilder: FormBuilder,private http: Http) { }

  ngOnInit() {
    this.create_form();
  }

  create_form(){
    this.paymentForm = this.formBuilder.group({
      cardholder_name: ['', Validators.required],
      card_number: ['', Validators.required],
      card_cvv: ['', Validators.required],
      card_month: ['', Validators.required],
      card_year: ['', Validators.required]
    }); 
  }

  get f() { return this.paymentForm.controls; }

  chargeCreditCard() {
    this.submitted = true;
    if (this.paymentForm.invalid) { 
      return;
    } else {
      let form = document.getElementsByTagName("form")[0];
      (<any>window).Stripe.card.createToken({
        number: this.paymentForm.controls['card_number'].value,
        exp_month: this.paymentForm.controls['card_month'].value,
        exp_year: this.paymentForm.controls['card_year'].value,
        cvc: this.paymentForm.controls['card_cvv'].value
        }, (status: number, response: any) => {
        if (status === 200) {
          let token = response.id;
          this.chargeCard(token);
        } else {
          this.strMessage = response.error.message;
        console.log(response.error.message);
        }
      });
    }
  }

  chargeCard(token: string) {
    const headers = new Headers({'token': token, 'amount': 100});
    this.http.post(environment.apiUrl+'/payment/charge', {}, {headers: headers})
      .subscribe(resp => {
        console.log(resp);
      })
  }
  

}
