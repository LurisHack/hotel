import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../admin/component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {TestingModel} from "../../utility/model/testing-model";


@Component({
  standalone: true,
  imports: [AdminComponentModule, ReactiveFormsModule, ScrollingModule],
  selector: 'app-testing-component',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})


export class TestingComponent implements OnInit {

  formGroup: any;

  productList: TestingModel[] = []

  formInputs = [
    {name: 'Code', formControlName: 'Code', type: 'text'},
    {name: 'Name', formControlName: 'Name', type: 'text'},
    {name:  'Price', formControlName: 'Price', type: 'number'},
    {name: 'Count', formControlName: 'Count', type: 'number'}
  ]

  constructor(private modalCtrl: ModalController) {
    this.generate()
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Code: new FormControl(null, Validators.required),
      Name: new FormControl(null, Validators.required),
      Count: new FormControl(null, Validators.required),
      Price: new FormControl(null, Validators.required),
    })
  }

  generate(){
    for(let i = 0; i < 20; i++ ){
      this.productList.push({Code: i + 100, Name: 'Name '+i.toString(), Count: i + 123, Price: 233+i},)
    }
  }

  addProduct() {
   // console.log(this.formGroup.value)

    this.modalCtrl.dismiss( this.formGroup.value).then()


    // this.productList.push(this.formGroup.value)
    // console.log(this.productList)
  }
}
