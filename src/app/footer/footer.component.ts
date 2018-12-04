import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public nameEnterprise = 'Acsendo';
  public arrayForm: any[] = [];
  public formAcsendo: any;

  constructor(private fb: FormBuilder) {

    this.formAcsendo = new FormGroup({});
    this.formAcsendo = this.fb.group({
      name: '',
      email: '',
      company: '',
      employee: '1',
      product: '1',
      country: '1',
      number_employee: '1',
      number_indicative:'1',
      number_phone:'',
      reason_lookFor:''



    });
  }

  ngOnInit() {
  }

  newDemo(form){

  }
}
