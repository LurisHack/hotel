import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../admin/component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {TestingModel} from "../../utility/model/testing-model";
import {Storage} from "@ionic/storage-angular";
import {TestingEnum} from "../../utility/enum/testing-enum";


@Component({
  standalone: true,
  imports: [AdminComponentModule, ReactiveFormsModule, ScrollingModule],
  selector: 'app-testing-component',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  providers: [Storage]
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

  constructor(private modalCtrl: ModalController, private storage: Storage) {
   }

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

    // this.modalCtrl.dismiss( this.formGroup.value).then()


    const addProductListData = () => {

      this.productList.push(this.formGroup.value)

      this.formGroup.reset()


      // this.storage.create().then(storage => {
      //
      //   storage.get(TestingEnum.TESTING_STORAGE)
      //     .then(storedData => {
      //
      //       this.productList = storedData
      //
      //     })
      //
      // })

    }




    this.storage.create()
      .then(storage => {

        let tempAry: any = []

        storage.get(TestingEnum.TESTING_STORAGE)
          .then(getStorage => {
            console.log('storage value ', getStorage)



            if (!getStorage){
              tempAry.push(this.formGroup.value)
              storage.set(TestingEnum.TESTING_STORAGE ,  tempAry).then(t => {
                {
                  console.log('Successfully stored')
                  addProductListData()

                }
              })
            }else {

              storage.set(TestingEnum.TESTING_STORAGE, [...getStorage, this.formGroup.value])
                .then(t => {

                  console.log('Successfully stored')
                   addProductListData()
                })

            }

          })



      })



    // this.productList.push(this.formGroup.value)
    // console.log(this.productList)
  }




}
