import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

import {ModalController} from "@ionic/angular";

import {StoreAddProductComponent} from "../../popupComponent/store-add-product/store-add-product.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule,StoreAddProductComponent ],
  selector: 'app-store-ui',
  templateUrl: './store-ui.component.html',
  styleUrls: ['./store-ui.component.scss'],
})
export class StoreUiComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async    storeUi() {

        const modalCtrl = await this.modalCtrl.create({
          component: StoreAddProductComponent,
        })
    await modalCtrl.present()
    }
}
