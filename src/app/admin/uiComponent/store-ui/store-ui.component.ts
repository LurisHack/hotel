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
  propertyName = [
    {no: 1,name: 'RRQ',price: 2000, count: 1, total: 2000},
    {no: 2,name: 'Apex',price: 500, count: 2, total: 1000},
    {no: 3,name: 'cola',price: 800, count: 3, total: 2400},
    {no: 4,name: 'juice',price: 1500, count: 5, total: 7500},
    {no: 5,name: 'spy',price: 2500, count: 5, total: 12500},
    {no: 6,name: 'rice and water',price: 2000, count: 3, total: 6000},
  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async    storeUi() {

        const modalCtrl = await this.modalCtrl.create({
          component: StoreAddProductComponent,
        })
    await modalCtrl.present()
    }
}
