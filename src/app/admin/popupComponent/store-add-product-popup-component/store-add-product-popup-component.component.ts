import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
 import {ScrollingModule} from "@angular/cdk/scrolling";
import {Storage} from "@ionic/storage-angular";

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
  providers: [Storage],
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

  constructor( private modalCtrl: ModalController,private storage: Storage) { }

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

    const addProductListData = () => {
      this.productList.push(this.formGroup.value)
      this.formGroup.reset()
    }
    this.storage.create().then((storage :any)=> {

          let tempAry: any = []

          // storage.get(StoreEnum.STORE_STORAGE).then((getStorage: any) => {
          //       console.log('storage value ', getStorage)
          //
          //       if (!getStorage){
          // tempAry.push(this.formGroup.value)
          //         storage.set(StoreEnum.STORE_STORAGE ,  tempAry).then((t: any) => {
          //           {
          //               console.log('Successfully stored')
          //             addProductListData()
          //           }
          //         })
          //       }else {

                  // storage.set(StoreEnum.STORE_STORAGE, [...getStorage, this.formGroup.value]).then((t: any) => {
                  //     console.log('Successfully stored')
                  //       addProductListData()
                  //     })

                // }
              //
              // })



        })

    }


    storeEdit(product: productLitType) {

    }


}
