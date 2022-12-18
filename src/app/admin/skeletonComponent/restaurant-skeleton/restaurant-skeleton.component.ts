import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-restaurant-skeleton',
  templateUrl: './restaurant-skeleton.component.html',
  styleUrls: ['./restaurant-skeleton.component.scss'],
  imports: [
    IonicModule,
    NgIf,
    NgForOf
  ]
})
export class RestaurantSkeletonComponent implements OnInit {
 loaded = true
  constructor() {
   setTimeout(()=>{
     this.loaded = false
   },5000)

  }

  ngOnInit() {}

}
