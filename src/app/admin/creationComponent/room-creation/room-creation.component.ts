import { Component } from '@angular/core';
import {RoomListUiComponent} from "../../uiComponent/room-list-ui/room-list-ui.component";

@Component({
  standalone: true,
  imports: [RoomListUiComponent],
  selector: 'app-room-creation',
  templateUrl: './room-creation.component.html',
  styleUrls: ['./room-creation.component.scss'],
})
export class RoomCreationComponent {
  constructor() {
    console.log('room list component')
  }


}
