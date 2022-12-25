import {Component, Input, OnInit} from '@angular/core';
import { ModalController} from "@ionic/angular";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {RoomPopupComponent} from "../../popupComponent/room-popup/room-popup.component";
import {AdminComponentModule} from "../../component/admin-component.module";
import {RoomDataModel} from "../../../utility/model/room-data";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ScrollingModule, RoomPopupComponent],
  selector: 'app-room-ui',
  templateUrl: './room-ui.component.html',
  styleUrls: ['./room-ui.component.scss'],
})
export class RoomUIComponent implements OnInit{

  public progress = 0;

  @Input() roomData: RoomDataModel | undefined;


  constructor(private modalCtrl: ModalController) {
    setInterval(() => {
      this.progress += 0.01;
    }, 50);
  }


  ngOnInit(): void {
  }

  async roomPopup() {
    console.log('Add item button clicked!')
    const modalCtrl = await this.modalCtrl.create({
      component: RoomPopupComponent,
      componentProps: {roomData: this.roomData},
      cssClass: 'siteInformation-popup-modal',
      backdropDismiss: false
    })
    await modalCtrl.present()
  }


}
