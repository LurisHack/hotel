import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-log-skeleton',
  templateUrl: './log-skeleton.component.html',
  styleUrls: ['./log-skeleton.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class LogSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
