import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-restaurant-add-food-popup-component',
  templateUrl: './restaurant-add-food-popup-component.component.html',
  styleUrls: ['./restaurant-add-food-popup-component.component.scss'],
  imports: [
    AdminComponentModule,
    ReactiveFormsModule,
  ]
})
export class RestaurantAddFoodPopupComponentComponent implements OnInit {

  formGroup : any;

  constructor() { }

  ngOnInit() {

    this.formGroup = new FormGroup<any>({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required),
    })
  }




  addRestaurantFood() {
    console.log(this.formGroup)
  }
}
