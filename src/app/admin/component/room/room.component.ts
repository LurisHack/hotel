import {Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {RoomUIComponent} from "../../uiComponent/room-ui/room-ui.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AdminComponentModule} from "../admin-component.module";
import {RoomSkeletonComponent} from "../../skeletonComponent/room-skeleton/room-skeleton.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RoomUIComponent, ScrollingModule, RoomSkeletonComponent],
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})

export class ROOMComponent{


  scrollIndex = 0
  loaded = true

  constructor(private store: Store<{testingValue: {testingValue: number[]}}>) {

    setTimeout(()=>{
      this.loaded = false
    },5000)

  }

  scrollIndexEvent($event: number) {
    console.log($event)
    this.scrollIndex = $event

  }
}
