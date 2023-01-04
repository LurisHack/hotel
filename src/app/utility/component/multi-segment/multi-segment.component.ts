import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdminComponentModule} from "../../../admin/component/admin-component.module";

@Component({
  standalone: true,
   imports: [AdminComponentModule],
  selector: 'app-multi-segment',
  templateUrl: './multi-segment.component.html',
  styleUrls: ['./multi-segment.component.scss'],
})
export class MultiSegmentComponent implements OnInit {

  @Input() segmentData: any[] = [];
  @Output() segmentDataOutput = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {}

  segmentChanges($event: any){
    console.log($event.detail.value)
    this.segmentDataOutput.emit($event.detail.value)
  }

}
