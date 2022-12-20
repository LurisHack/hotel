import { Component } from '@angular/core';
import {RoomListUiComponent} from "../../uiComponent/room-list-ui/room-list-ui.component";

@Component({
  standalone: true,
  imports: [RoomListUiComponent],
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent{
  constructor() {
    console.log('room list component')
  }


}
