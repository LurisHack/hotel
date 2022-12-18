import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-log-ui',
  templateUrl: './log-ui.component.html',
  styleUrls: ['./log-ui.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class LogUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
