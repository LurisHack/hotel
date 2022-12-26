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
  foodItem = [
    {name: 'Code'},
    {name: 'Name'},
    {name: 'Price'},
    {name: 'Count'}
  ]

  constructor() { }

  ngOnInit() {

    this.formGroup = new FormGroup<any>({
      Code: new FormControl(null, Validators.required),
      Name: new FormControl(null, Validators.required),
      Price: new FormControl(null, Validators.required),
      Count: new FormControl(null, Validators.required),
    })

  }

  addFood() {
    console.log(this.formGroup)
  }
}
