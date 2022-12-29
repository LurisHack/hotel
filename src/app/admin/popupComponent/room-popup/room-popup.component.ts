import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AdminComponentModule} from "../../component/admin-component.module";
import {ItemAddingComponent} from "../../extraComponent/item-adding/item-adding.component";
import {RoomInventoryComponent} from "../../extraComponent/room-inventory/room-inventory.component";
import {RoomDataModel} from "../../../utility/model/room-data";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ItemAddingComponent, RoomInventoryComponent],
  selector: 'app-room-popup',
  templateUrl: './room-popup.component.html',
  styleUrls: ['./room-popup.component.scss'],
})
export class RoomPopupComponent {

  roomData: RoomDataModel | undefined
  segmentValue = 'itemAdding'
  constructor(public modalController: ModalController) { }

  itemAddingSegment($event: any) {
    this.segmentValue = $event.detail.value
  }
}
