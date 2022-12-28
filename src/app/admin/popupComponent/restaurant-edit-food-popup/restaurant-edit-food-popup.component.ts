import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ReactiveFormsModule],
  selector: 'app-restaurant-edit-food-popup',
  templateUrl: './restaurant-edit-food-popup.component.html',
  styleUrls: ['./restaurant-edit-food-popup.component.scss'],
})
export class RestaurantEditFoodPopupComponent implements OnInit {

  property: any

  formGroup: any;

  foodItem = [

    {name: 'Code', formControlName: 'Code', type: 'text', readOnly: true},
    {name: 'Name', formControlName: 'Name', type: 'text', readOnly: false },
    {name: 'Price', formControlName: 'Price', type: 'number', readOnly: false},
  ]

  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit() {

    this.formGroup = new FormGroup({
      Code: new FormControl(this.property.Code, Validators.required),
      Name: new FormControl(this.property.Name, Validators.required),
    Price: new FormControl(this.property.Price, Validators.required),
    })

  }

  EditFood() {
    this.modalCtrl.dismiss(this.formGroup.value).then()
  }
}
