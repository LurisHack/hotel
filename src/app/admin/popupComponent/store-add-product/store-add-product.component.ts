import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";


@Component({
  standalone: true,
  selector: 'app-store-add-product',
  templateUrl: './store-add-product.component.html',
  styleUrls: ['./store-add-product.component.scss'],
  imports: [
    AdminComponentModule,
    ReactiveFormsModule
  ]
})
export class StoreAddProductComponent implements OnInit {

  formGroup: any;



  formInputs = [
    {name: 'Code', formControlName: 'Code', type: 'text'},
    {name: 'Name', formControlName: 'Name', type: 'text'},
    {name:  'Price', formControlName: 'Price', type: 'number'},
    {name: 'Count', formControlName: 'Count', type: 'number'}
  ]



  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Code: new FormControl(null, Validators.required),

      Name: new FormControl(null, Validators.required),

      Count: new FormControl(null, Validators.required),

      Price: new FormControl(null, Validators.required),
    })
  }


    addProduct() {
      this.modalCtrl.dismiss( this.formGroup.value).then()
    }

}
