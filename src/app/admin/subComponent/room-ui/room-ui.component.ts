import { Component } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AddItemComponent} from "../../popupComponent/add-item/add-item.component";

@Component({
  standalone: true,
  imports: [IonicModule, ScrollingModule],
  selector: 'app-room-ui',
  templateUrl: './room-ui.component.html',
  styleUrls: ['./room-ui.component.scss'],
})
export class RoomUIComponent{

  constructor(private modalCtrl: ModalController) {
  }

  async addItems() {
    console.log('Add item button clicked!')

    const modalCtrl = await this.modalCtrl.create({
      component: AddItemComponent
    })

    await modalCtrl.present()


  }
}
