import { Component } from '@angular/core';
import {RoomListUiComponent} from "../../uiComponent/room-list-ui/room-list-ui.component";

@Component({
  standalone: true,
  imports: [RoomListUiComponent],
  selector: 'app-room-list-creation',
  templateUrl: './room-list-creation.component.html',
  styleUrls: ['./room-list-creation.component.scss'],
})
export class RoomListCreationComponent {
  constructor() {
    console.log('room list component')
  }


}
