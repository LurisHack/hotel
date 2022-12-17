import {Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {RoomUIComponent} from "../../uiComponent/room-ui/room-ui.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AdminComponentModule} from "../admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RoomUIComponent, ScrollingModule],
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})

export class ROOMComponent{


  scrollIndex = 0


  constructor(private store: Store<{testingValue: {testingValue: number[]}}>) {



  }

  scrollIndexEvent($event: number) {
    console.log($event)
    this.scrollIndex = $event

  }
}
