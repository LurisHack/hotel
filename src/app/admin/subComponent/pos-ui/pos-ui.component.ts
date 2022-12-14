import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
   selector: 'app-pos-ui',
  templateUrl: './pos-ui.component.html',
  styleUrls: ['./pos-ui.component.scss'],
})
export class PosUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
