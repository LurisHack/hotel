import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {PosUIComponent} from "../../uiComponent/pos-ui/pos-ui.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, PosUIComponent],
   selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class POSComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
