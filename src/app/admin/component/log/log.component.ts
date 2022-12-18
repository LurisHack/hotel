import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {LogUIComponent} from "../../uiComponent/log-ui/log-ui.component";
import {LogSkeletonComponent} from "../../skeletonComponent/log-skeleton/log-skeleton.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, LogUIComponent, LogSkeletonComponent],
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LOGComponent implements OnInit {

  loaded = true

  constructor() {
    setTimeout(()=>{
      this.loaded = false
    },5000)
  }

  ngOnInit() {}

}
