import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SETTINGComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
