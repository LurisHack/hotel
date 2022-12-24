import {Component} from '@angular/core';
import {RoomUIComponent} from "../../uiComponent/room-ui/room-ui.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AdminComponentModule} from "../admin-component.module";
import {RoomSkeletonComponent} from "../../skeletonComponent/room-skeleton/room-skeleton.component";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomFilterPipe} from "../../../utility/pipe/room-filter.pipe";
import {RoomStateFilterPipe} from "../../../utility/pipe/room-state-filter.pipe";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RoomUIComponent, ScrollingModule,
    RoomSkeletonComponent, RoomFilterPipe, RoomStateFilterPipe],
  selector: 'app-siteInformation',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
 })

export class ROOMComponent{


  scrollIndex = 0
  loaded = true
  segment = 'CheckIn'

  constructor(public siteInformationService: SiteInformationService) {

    setTimeout(()=>{
      this.loaded = false
    },5000)

  }

  scrollIndexEvent($event: number) {
    console.log($event)
    this.scrollIndex = $event

  }

  selectedSegment($event: any) {
    console.log($event.detail.value)
    this.segment = $event.detail.value
  }
}
