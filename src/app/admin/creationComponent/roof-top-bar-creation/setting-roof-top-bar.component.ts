import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-roof-top-bar-creation',
  templateUrl: './setting-roof-top-bar.component.html',
  styleUrls: ['./setting-roof-top-bar.component.scss'],
})
export class SettingRoofTopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
