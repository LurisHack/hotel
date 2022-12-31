import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterLink],
  selector: 'app-welcome-component',
  templateUrl: './admin-welcome-component.component.html',
  styleUrls: ['./admin-welcome-component.component.scss'],
})
export class AdminWelcomeComponentComponent implements OnInit {

  adminWelcomeData = [
    {header: 'ROOM', subHeader: 'Hotel rooms, check in, check out, available, booking', link: '/admin-home/ROOM' , img: '/assets/admin/room.jpg'},
    {header: 'POS', subHeader: 'Product search with code and see available counts.', link: '/admin-home/POS' , img: '/assets/admin/pos.jpg'},
    {header: 'ROOF TOP BAR', subHeader: 'Fired Noddle, BBQ, Hotpot,  Aperol, Gordon’s Gin, Gordon’s Gin', link: '/admin-home/ROOFTOPBAR' , img: '/assets/admin/rooftopbar.jpg'},
    {header: 'PLAYGROUND', subHeader: ' Swimming, Ridding, Racing, GYM ', link: '/admin-home/PLAYGROUND' , img: '/assets/admin/playground.jpg'},
    {header: 'STORE', subHeader: 'Ballantine’s Scotch Whisky, Hlibny Dar Vodka, Gordon’s Gin, Gordon’s Gin ', link: '/admin-home/STORE' , img: '/assets/admin/store.jpg'},
    {header: 'Restaurant', subHeader: 'BBQ, Hotpot, Ballantine’s Scotch Whisky, Hlibny Dar Vodka, Gordon’s Gin, Gordon’s Gin ', link: '/admin-home/RESTAURANT' , img: '/assets/admin/restaurant.jpg'}



    //
  ]
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

}
