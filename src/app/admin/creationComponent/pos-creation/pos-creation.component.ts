import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-pos-creation',
  templateUrl: './pos-creation.component.html',
  styleUrls: ['./pos-creation.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class PosCreationComponent implements OnInit {

  name = false;
  code = false;

  constructor() { }

  ngOnInit() {}

  selected($event: any) {
    if ($event.detail.value == 'name') {
      this.name = true;
      this.code = false;
    }else if ($event.detail.value == 'code') {
      this.name = false;
      this.code = true;
    }
  }

}
