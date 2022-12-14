import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {RestaurantUIComponent} from "../../subComponent/restaurant-ui/restaurant-ui.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule,RestaurantUIComponent],
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss'],
})
export class RESTURANTComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
