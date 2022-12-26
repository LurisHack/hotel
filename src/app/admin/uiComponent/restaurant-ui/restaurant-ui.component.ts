import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ModalController} from "@ionic/angular";
import {
  RestaurantAddFoodPopupComponentComponent
} from "../../popupComponent/resturant-add-food-popup-component/restaurant-add-food-popup-component.component";

type addPropertyType = {
  Code: string,
  Name: string,
  Price: number,
}

@Component({
  standalone: true,
  imports: [AdminComponentModule, RestaurantAddFoodPopupComponentComponent],
  selector: 'app-restaurant-ui',
  templateUrl: './restaurant-ui.component.html',
  styleUrls: ['./restaurant-ui.component.scss'],
})


export class RestaurantUIComponent implements OnInit {

  addProperty: addPropertyType[] = []

  constructor(private ModalCtrl: ModalController) { }



  ngOnInit() {}

  async addFood() {

    const ModalCtrl = await this.ModalCtrl.create({
      component: RestaurantAddFoodPopupComponentComponent
    })

    ModalCtrl.onDidDismiss().then((value:any)=>{

      this.addProperty.push(value.data)

      this.addProperty = this.addProperty.map(m => m)

    })

    await ModalCtrl.present()
  }
}
