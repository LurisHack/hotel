import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ReactiveFormsModule],
  selector: 'app-store-add-product',
  templateUrl: './store-add-product.component.html',
  styleUrls: ['./store-add-product.component.scss'],

})
export class StoreAddProductComponent implements OnInit {

  formGroup: any;


  constructor() { }

  ngOnInit() {

    this.formGroup = new FormGroup<any>({
      code: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    })

  }

  addStoreProduct() {
    console.log(this.formGroup)
  }
}
