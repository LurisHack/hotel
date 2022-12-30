import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {StoreEditPopupComponentComponent} from "../store-edit-popup-component/store-edit-popup-component.component";
import {ScrollingModule} from "@angular/cdk/scrolling";

type productLitType = {
  Code: string,
  Name: string,
  Price: string,
  Count: number,
  Total: number,
}

@Component({
  standalone: true,
  selector: 'app-store-add-product-popup-component',
  templateUrl: './store-add-product-popup-component.component.html',
  styleUrls: ['./store-add-product-popup-component.component.scss'],
  imports: [
    AdminComponentModule,
    ReactiveFormsModule,
    ScrollingModule
  ]
})
export class StoreAddProductPopupComponentComponent implements OnInit {

  productList: productLitType[] = []

  loaded = true

  formGroup: any;

  formInputs = [
    {name: 'Code', formControlName: 'Code', type: 'text'},
    {name: 'Name', formControlName: 'Name', type: 'text'},
    {name:  'Price', formControlName: 'Price', type: 'number'},
    {name: 'Count', formControlName: 'Count', type: 'number'},
    {name: 'Total', formControlName: 'Total', type: 'number'},
  ]

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Code: new FormControl(null, Validators.required),

      Name: new FormControl(null, Validators.required),

      Price: new FormControl(null, Validators.required),

      Count: new FormControl(null, Validators.required),

      Total: new FormControl(null, Validators.required),
    })
  }


  addProduct() {
    this.modalCtrl.dismiss( this.formGroup.value).then()
  }


    storeEdit(product: productLitType) {

    }

    addList() {
      this.productList.push(this.formGroup.value)
      this.productList = this.productList.map(m => m)

    }
}
