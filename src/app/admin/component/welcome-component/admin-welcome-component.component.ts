import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NavigationDetailCardComponent} from "../../uiComponent/navigation-detail-card/navigation-detail-card.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterLink, NavigationDetailCardComponent],
  selector: 'app-welcome-component',
  templateUrl: './admin-welcome-component.component.html',
  styleUrls: ['./admin-welcome-component.component.scss'],
})
export class AdminWelcomeComponentComponent implements OnInit {

  adminWelcomeData = [
    {header: 'Room', subHeader: 'Hotel rooms, check in, check out, available, booking', link: '/admin-home/ROOM' , img: '/assets/admin/room.jpg'},
    {header: 'Pos', subHeader: 'Product search with code and see available counts.', link: '/admin-home/POS' , img: '/assets/admin/pos.jpg'},
    {header: 'Rooftop Bar', subHeader: 'Fired Noddle, BBQ, Hotpot,  Aperol, Gordon’s Gin, Gordon’s Gin', link: '/admin-home/ROOFTOPBAR' , img: '/assets/admin/rooftopbar.jpg'},
    {header: 'Playground', subHeader: ' Swimming, Ridding, Racing, GYM ', link: '/admin-home/PLAYGROUND' , img: '/assets/admin/playground.jpg'},
    {header: 'Store', subHeader: 'Ballantine’s Scotch Whisky, Hlibny Dar Vodka, Gordon’s Gin, Gordon’s Gin ', link: '/admin-home/STORE' , img: '/assets/admin/store.jpg'},
    {header: 'Restaurant', subHeader: 'BBQ, Hotpot, Ballantine’s Scotch Whisky, Hlibny Dar Vodka, Gordon’s Gin, Gordon’s Gin ', link: '/admin-home/RESTAURANT' , img: '/assets/admin/restaurant.jpg'}
  ]
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

}
