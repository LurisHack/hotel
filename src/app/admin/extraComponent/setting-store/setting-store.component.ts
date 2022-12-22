import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-setting-store',
  templateUrl: './setting-store.component.html',
  styleUrls: ['./setting-store.component.scss'],
})
export class SettingStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
