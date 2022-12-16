import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AdminComponentModule} from "../../component/admin-component.module";
import {ItemAddingComponent} from "../../extraComponent/item-adding/item-adding.component";
import {RoomInventoryComponent} from "../../extraComponent/room-inventory/room-inventory.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ItemAddingComponent, RoomInventoryComponent],
  selector: 'app-room-popup',
  templateUrl: './room-popup.component.html',
  styleUrls: ['./room-popup.component.scss'],
})
export class RoomPopupComponent implements OnInit {

  segmentValue = 'itemAdding'
  constructor(public modalController: ModalController) { }

  ngOnInit() {}


  itemAddingSegment($event: any) {
    this.segmentValue = $event.detail.value
  }
}
