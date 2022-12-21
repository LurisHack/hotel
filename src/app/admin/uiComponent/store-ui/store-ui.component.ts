import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {RoomPopupComponent} from "../../popupComponent/room-popup/room-popup.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule,],
  selector: 'app-store-ui',
  templateUrl: './store-ui.component.html',
  styleUrls: ['./store-ui.component.scss'],
})
export class StoreUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
