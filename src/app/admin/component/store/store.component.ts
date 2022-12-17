import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {PosUIComponent} from "../../uiComponent/pos-ui/pos-ui.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, PosUIComponent],
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class STOREComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
