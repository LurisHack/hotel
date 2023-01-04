import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MultiSegmentComponent} from "../multi-segment/multi-segment.component";
import {Header} from "../../class/header";
import {Store} from "@ngrx/store";
import {segmentState} from "../../store/header/header.reducer";
import {SEGMENT_DATA} from "../../store/header/header.action";

@Component({
  standalone: true,
  imports: [MultiSegmentComponent],
  selector: 'app-multi-header',
  templateUrl: './multi-header.component.html',
  styleUrls: ['./multi-header.component.scss'],
})
export class MultiHeaderComponent implements OnInit, OnChanges{

  @Input() getFragment: any | undefined

  segmentData: any[] = []

  constructor(private store: Store<{segmentData: {segmentData: segmentState}}>) {
    console.log('multi header ', this.getFragment)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log('multi header ', this.getFragment)

    switch (this.getFragment){
      case 'ROOM':
        this.segmentData = new Header().roomSegment
        break;
      default:
        this.segmentData = []
        break;

    }

  }

  ngOnInit() {
    console.log('multi header ', this.getFragment)
  }


  segmentOutputData($event: any) {

    switch (this.getFragment){
      case 'ROOM':

        console.log($event)

        this.store.dispatch({type: SEGMENT_DATA, payload: $event})

        break;



    }

  }
}
