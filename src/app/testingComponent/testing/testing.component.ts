import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../admin/component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";



@Component({
  standalone: true,
  imports: [AdminComponentModule, ReactiveFormsModule],
  selector: 'app-testing-component',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})


export class TestingComponent implements OnInit {

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
      Code: new FormControl(null, Validators.required),
      Name: new FormControl(null, Validators.required),
      Count: new FormControl(null, Validators.required),
      Price: new FormControl(null, Validators.required),
    })
  }

  addProduct() {
   // console.log(this.formGroup.value)

    this.modalCtrl.dismiss(this.formGroup.value).then()


    // this.productList.push(this.formGroup.value)
    // console.log(this.productList)
  }
}
