import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-room-inventory',
  templateUrl: './room-inventory.component.html',
  styleUrls: ['./room-inventory.component.scss'],
})
export class RoomInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
