import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ModalController} from "@ionic/angular";
import {StoreAddProductPopupComponentComponent} from "../../popupComponent/store-add-product-popup-component/store-add-product-popup-component.component";
 import {
    StoreEditPopupComponentComponent
} from "../../popupComponent/store-edit-popup-component/store-edit-popup-component.component";

import {Storage} from "@ionic/storage-angular";
import {StoreEnum} from "../../../utility/enum/store-enum";

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
  providers: [Storage]
})
export class StoreUiComponent implements OnInit {

  productList: productLitType[] = []

  loaded = true


  constructor(private modalCtrl: ModalController,private storage: Storage) {
      this.getProductListData()
  }

  ngOnInit() {}

  async storeUi() {

        const modalCtrl = await this.modalCtrl.create({
          component: StoreAddProductPopupComponentComponent,
            cssClass: 'add-store-item'
        })

    modalCtrl.onDidDismiss().then((data: any) => {
        this.getProductListData()
        }).catch()

    await modalCtrl.present()


}

  async  storeEdit(product: any) {

      const editModal = await this.modalCtrl.create({
          component: StoreEditPopupComponentComponent,
          componentProps: {product: product}
      })
      editModal.onDidDismiss().then((value: any) => {
          this.getProductListData()
      })

      await editModal.present()

  }
    getProductListData() {

        this.storage.create().then((storage: any) => {

            storage.get(StoreEnum.STORE_STORAGE )
                .then((storageData: productLitType[]) => {

                    console.log(storageData)
                    this.productList = storageData

                })
        })

    }
}
