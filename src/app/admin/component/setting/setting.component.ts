import { Component } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {RouterModule} from "@angular/router";
import {NavigationDetailCardComponent} from "../../uiComponent/navigation-detail-card/navigation-detail-card.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterModule, NavigationDetailCardComponent],
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SETTINGComponent{

  adminWelcomeData = [
    {header: 'Welcome Presentation', subHeader: 'Change hotel detail text, photo', link: '/admin-home/ROOM' , img: '/assets/admin/welcome_presentation.jpg'},
    {header: 'Room Type', subHeader: 'Special, Normal, Deluxe, Luxury', link: '/admin-home/roomType' , img: '/assets/admin/room_type.jpg'},
    {header: 'Room List', subHeader: 'Building list, Room list, Room number', link: '/admin-home/roomList' , img: '/assets/admin/room_list.jpg'},
    {header: 'Playground', subHeader: 'Swimming pool, Riding, Racing etc... add to playground', link: '/admin-home/playGround' , img: '/assets/admin/playground.jpg'},
    {header: 'Roof Top Bar', subHeader: 'Adding table for roof top bar and restaurant', link: '/admin-home/roofTopBar' , img: '/assets/admin/rooftopbar.jpg'},
    {header: 'Salary Package', subHeader: 'Creating salary package depend on user role', link: '/admin-home/salaryPackage' , img: '/assets/admin/salary_package.jpg'},

  ]

}
