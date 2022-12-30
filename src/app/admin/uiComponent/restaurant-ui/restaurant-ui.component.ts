import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ModalController} from "@ionic/angular";
import {
  RestaurantAddFoodPopupComponentComponent
} from "../../popupComponent/resturant-add-food-popup-component/restaurant-add-food-popup-component.component";
import {
  RestaurantEditFoodPopupComponent
} from "../../popupComponent/restaurant-edit-food-popup/restaurant-edit-food-popup.component";
import {Storage} from "@ionic/storage-angular";
import {RestaurantEnum} from "../../../utility/enum/restaurant-enum";

type addPropertyType = {
  Code: string,
  Name: string,
  Price: number,
}

@Component({
  standalone: true,
  imports: [AdminComponentModule, RestaurantAddFoodPopupComponentComponent, RestaurantEditFoodPopupComponent],
  selector: 'app-restaurant-ui',
  templateUrl: './restaurant-ui.component.html',
  styleUrls: ['./restaurant-ui.component.scss'],
  providers: [Storage]
})


export class RestaurantUIComponent implements OnInit {

  name = false;
  code = false;
  propertyList: addPropertyType[] = []

  constructor(private ModalCtrl: ModalController,private storage: Storage) {
    this.getPropertyListData()
  }

  ngOnInit() {}

  async addFood() {

    const ModalCtrl = await this.ModalCtrl.create({
      component: RestaurantAddFoodPopupComponentComponent,
      backdropDismiss: false,
      cssClass: 'add-food-popup'
    })

    ModalCtrl.onDidDismiss().then((value:any)=>{

     // if(value.data){
     //   this.propertyList.push(value.data)
     //
     //   this.propertyList = this.propertyList.map(m => m)
     // }
      this.getPropertyListData()

    })

    await ModalCtrl.present()

  }

   async editFood(property: any) {

    const editCtrl = await this.ModalCtrl.create({
      component: RestaurantEditFoodPopupComponent,
      componentProps: {property: property},
      backdropDismiss: false,
    })

     editCtrl.onDidDismiss().then((value: any)=> {

       console.log(property , ' - ', value)

       this.propertyList = this.propertyList.map((map: any)=> map.Code === value.data.Code ? value.data : map)

     })

     await editCtrl.present()
   }

  selected($event: any) {
    if ($event.detail.value == 'name') {
      this.name = true;
      this.code = false;
    }else if ($event.detail.value == 'code') {
      this.name = false;
      this.code = true;
    }
  }
  getPropertyListData(){
    this.storage.create().then((storage:any) => {
      storage.get(RestaurantEnum.RESTAURANT_STORAGE).then((storageData: addPropertyType[]) => {
        console.log(storageData)
        this.propertyList = storageData
      })
    })
  }

}
