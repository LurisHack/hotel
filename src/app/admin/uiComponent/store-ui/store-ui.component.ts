import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

import {ModalController} from "@ionic/angular";

import {StoreAddProductPopupComponentComponent} from "../../popupComponent/store-add-product-popup-component/store-add-product-popup-component.component";
import {TestingPopUpComponent} from "../../../testing-pop-up/testing-pop-up.component";
import {
    StoreEditPopupComponentComponent
} from "../../popupComponent/store-edit-popup-component/store-edit-popup-component.component";

type productLitType = {
  Code: string,
  Name: string,
  Price: string,
  Count: number,
  Total: number,
}

@Component({
  standalone: true,
  imports: [AdminComponentModule,],
  selector: 'app-store-ui',
  templateUrl: './store-ui.component.html',
  styleUrls: ['./store-ui.component.scss'],
})
export class StoreUiComponent implements OnInit {

  productList: productLitType[] = []

  loaded = true

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async storeUi() {

        const modalCtrl = await this.modalCtrl.create({
          component: StoreAddProductPopupComponentComponent,
            cssClass: 'add-store-item'
        })

    modalCtrl.onDidDismiss().then((data: any) => {

        console.log(data.data)


        if (!data.data){
            return
        }

        console.log(data.data)

          this.productList.push(data.data)
          this.productList = this.productList.map(m => m)

        console.log(this.productList)

        }).catch()

    await modalCtrl.present()


}

  async  storeEdit(product: any) {

      const editModal = await this.modalCtrl.create({
          component: StoreEditPopupComponentComponent,
          componentProps: {product: product}
      })
      editModal.onDidDismiss().then((value: any) => {


          this.productList = this.productList.map((map: any) =>  map.Code === value.data.Code ? value.data : map)


      })

      await editModal.present()

  }
}
