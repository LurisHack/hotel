import { Component } from '@angular/core';
import { ModalController} from "@ionic/angular";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {RoomPopupComponent} from "../../popupComponent/room-popup/room-popup.component";
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ScrollingModule, RoomPopupComponent],
  selector: 'app-room-ui',
  templateUrl: './room-ui.component.html',
  styleUrls: ['./room-ui.component.scss'],
})
export class RoomUIComponent{

  public progress = 0;


  constructor(private modalCtrl: ModalController) {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      // if (this.progress > 1) {
      //   setTimeout(() => {
      //     this.progress = 0;
      //   }, 1000);
      // }
    }, 50);
  }

  async roomPopup() {
    console.log('Add item button clicked!')
    const modalCtrl = await this.modalCtrl.create({
      component: RoomPopupComponent,
      cssClass: 'room-popup-modal',
      backdropDismiss: false
    })
    await modalCtrl.present()
  }
}