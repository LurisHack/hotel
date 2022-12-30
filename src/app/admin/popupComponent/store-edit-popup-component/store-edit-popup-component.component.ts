import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";

@Component({
  standalone: true,
  imports: [AdminComponentModule,ReactiveFormsModule],
  selector: 'app-store-edit-popup-component',
  templateUrl: './store-edit-popup-component.component.html',
  styleUrls: ['./store-edit-popup-component.component.scss'],
})
export class StoreEditPopupComponentComponent implements OnInit {

  product: any

  formGroup: any;


  formInputs = [
    {name: 'Code', formControlName: 'Code', type: 'text'},
    {name: 'Name', formControlName: 'Name', type: 'text'},
    {name:  'Price', formControlName: 'Price', type: 'number'},
    {name: 'Count', formControlName: 'Count', type: 'number'},
    {name: 'Total', formControlName: 'Total', type: 'number'}
  ]

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      Code: new FormControl(this.product.Code, Validators.required),
      Name: new FormControl(this.product.Name, Validators.required),
      Count: new FormControl(this.product.Count, Validators.required),
      Price: new FormControl(this.product.Price, Validators.required),
      Total: new FormControl(this.product.Total, Validators.required),
    })
  }

  addProduct() {
    this.modalCtrl.dismiss(this.formGroup.value).then()

  }


}
