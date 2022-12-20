import { Component } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {MenuController} from "@ionic/angular";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterModule],
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SETTINGComponent{

}
