import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

import {ModalController} from "@ionic/angular";

import {StoreAddProductComponent} from "../../popupComponent/store-add-product/store-add-product.component";
type productLitType = {
  no: number,
  name: string,
  price: number,
  count: number,
  total: number,
}

@Component({
  standalone: true,
  imports: [AdminComponentModule,StoreAddProductComponent ],
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
          component: StoreAddProductComponent,
        })
    modalCtrl.onDidDismiss()
        .then((data: any) => {

          this.productList.push(data.data)
          this.productList = this.productList.map(m => m)

        }).catch()

    await modalCtrl.present()


}

}
