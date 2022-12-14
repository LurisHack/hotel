import {Component} from '@angular/core';
import {RoomUIComponent} from "../../uiComponent/room-ui/room-ui.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AdminComponentModule} from "../admin-component.module";
import {RoomSkeletonComponent} from "../../skeletonComponent/room-skeleton/room-skeleton.component";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {BuildingFilterPipe} from "../../../utility/pipe/building-filter.pipe";
import {RoomStateFilterPipe} from "../../../utility/pipe/room-state-filter.pipe";
import {segmentState} from "../../../utility/store/header/header.reducer";
import {Store} from "@ngrx/store";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RoomUIComponent, ScrollingModule,
    RoomSkeletonComponent, BuildingFilterPipe, RoomStateFilterPipe],
  selector: 'app-siteInformation',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
 })

export class ROOMComponent{

  scrollIndex = 0
  loaded = true
  segment = 'CheckIn'

  forTransferBtn = ['CheckIn']
  forAddBtn = ['NearlyTimeUp', 'CheckIn']

  constructor(public siteInformationService: SiteInformationService,
              private store: Store<{segmentData: {segmentData: segmentState}}>) {

    setTimeout(()=>{
      this.loaded = false
    },5000)

    store.select('segmentData')
      .subscribe((segmentData: any) => {


        this.segment = segmentData.segmentData
      })

  }

  scrollIndexEvent($event: number) {
    console.log($event)
    this.scrollIndex = $event

  }

  // selectedSegment($event: any) {
  //   console.log($event.detail.value)
  //   this.segment = $event.detail.value
  // }
}
