import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ModalController} from "@ionic/angular";
import {
  RestaurantAddFoodPopupComponentComponent
} from "../../popupComponent/resturant-add-food-popup-component/restaurant-add-food-popup-component.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RestaurantAddFoodPopupComponentComponent],
  selector: 'app-restaurant-ui',
  templateUrl: './restaurant-ui.component.html',
  styleUrls: ['./restaurant-ui.component.scss'],
})

type addPropertyType = {
  Code: string,
  Name: string,
  Price: number,
}

export class RestaurantUIComponent implements OnInit {

  // addProperty = [
  //   { name: 'Seared Tuna', price: '25000', count: '1',},
  //   { name: 'Spicy', price: '6000', count: '5',},
  //   { name: 'Mar Lar Shan khw', price: '6000', count: '6',},
  //   { name: 'Myin khwar Wart Thut', price: '6000', count: '7',},
  //   { name: 'Hta Min Kyaw', price: '1000', count: '5',},
  //   { name: 'Kyut Thi Yoo', price: '1500', count: '3',},
  //   { name: 'Ngar Than Pyar Pong', price: '5500', count: '2',},
  // ];

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
