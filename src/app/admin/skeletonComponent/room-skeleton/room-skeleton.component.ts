import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ScrollingModule} from "@angular/cdk/scrolling";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ScrollingModule],
  selector: 'app-room-skeleton',
  templateUrl: './room-skeleton.component.html',
  styleUrls: ['./room-skeleton.component.scss'],
})
export class RoomSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {





  }

}
