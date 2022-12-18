import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {RestaurantUIComponent} from "../../uiComponent/restaurant-ui/restaurant-ui.component";
import {RestaurantSkeletonComponent} from "../../skeletonComponent/restaurant-skeleton/restaurant-skeleton.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule,RestaurantUIComponent,RestaurantSkeletonComponent],
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss'],
})
export class RESTURANTComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
