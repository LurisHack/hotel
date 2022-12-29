import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-room-inventroy',
  templateUrl: './room-inventroy.component.html',
  styleUrls: ['./room-inventroy.component.scss'],
})
export class RoomInventroyComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
