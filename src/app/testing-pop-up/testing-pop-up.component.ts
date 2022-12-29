import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin/component/admin-component.module";
import {ModalController} from "@ionic/angular";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  standalone:true,
  imports: [AdminComponentModule, ReactiveFormsModule],
  selector: 'app-testing-pop-up',
  templateUrl: './testing-pop-up.component.html',
  styleUrls: ['./testing-pop-up.component.scss'],
})
export class TestingPopUpComponent implements OnInit {

  product: any

  formGroup: any;


  formInputs = [
    {name: 'Code', formControlName: 'Code', type: 'text'},
    {name: 'Name', formControlName: 'Name', type: 'text'},
    {name:  'Price', formControlName: 'Price', type: 'number'},
    {name: 'Count', formControlName: 'Count', type: 'number'}
  ]

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      Code: new FormControl(this.product.Code, Validators.required),
      Name: new FormControl(this.product.Name, Validators.required),
      Count: new FormControl(this.product.Count, Validators.required),
      Price: new FormControl(this.product.Price, Validators.required),
    })
  }

  addProduct() {
    this.modalCtrl.dismiss(this.formGroup.value).then()

  }

}
