import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-user-detail-popup',
  templateUrl: './user-detail-popup.component.html',
  styleUrls: ['./user-detail-popup.component.scss'],
})
export class UserDetailPopupComponent implements OnInit {

  segment = 'role'

  constructor() { }

  ngOnInit() {}

  roleAndDetail($event: any) {
    this.segment = $event.detail.value
  }
}
