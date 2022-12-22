import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports:[AdminComponentModule],
  selector: 'app-setting-play-ground',
  templateUrl: './setting-play-ground.component.html',
  styleUrls: ['./setting-play-ground.component.scss'],
})
export class SettingPlayGroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
