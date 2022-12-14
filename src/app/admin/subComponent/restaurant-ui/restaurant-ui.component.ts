import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-restaurant-ui',
  templateUrl: './restaurant-ui.component.html',
  styleUrls: ['./restaurant-ui.component.scss'],
})
export class RestaurantUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
