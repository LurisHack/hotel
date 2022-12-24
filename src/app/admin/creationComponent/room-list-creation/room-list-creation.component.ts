import { Component } from '@angular/core';
import {RoomListCreationUiComponent} from "../../uiComponent/room-list-creation-ui/room-list-creation-ui.component";

@Component({
  standalone: true,
  imports: [RoomListCreationUiComponent],
  selector: 'app-room-list-creation',
  templateUrl: './room-list-creation.component.html',
  styleUrls: ['./room-list-creation.component.scss'],
})
export class RoomListCreationComponent {
  constructor() {
    console.log('room list component')
  }


}
