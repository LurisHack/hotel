import { Component } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {RouterModule} from "@angular/router";
import {NavigationDetailCardComponent} from "../../uiComponent/navigation-detail-card/navigation-detail-card.component";
[]
@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterModule, NavigationDetailCardComponent],
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SETTINGComponent{

  adminWelcomeData = [
    {header: 'Welcome Presentation', subHeader: 'Change hotel detail text, photo', link: '/admin-home/SETTING/welcomePresentation' , img: '/assets/admin/welcome_presentation.jpg'},
    {header: 'Room Type', subHeader: 'Special, Normal, Deluxe, Luxury', link: '/admin-home/SETTING/roomTypeCreation' , img: '/assets/admin/room_type.jpg'},
    {header: 'Room List', subHeader: 'Building list, Room list, Room number', link: '/admin-home/SETTING/buildingList' , img: '/assets/admin/room_list.jpg'},
    {header: 'POS', subHeader: 'Adding sale items, foc items...', link: '/admin-home/SETTING/pos' , img: '/assets/admin/pos.jpg'},
    {header: 'Playground', subHeader: 'Swimming pool, Riding, Racing etc... add to playground', link: '/admin-home/SETTING/playground' , img: '/assets/admin/playground.jpg'},
    {header: 'Roof Top Bar', subHeader: 'Adding table for roof top bar and restaurant', link: '/admin-home/SETTING/rooftopBar' , img: '/assets/admin/rooftopbar.jpg'},
    {header: 'Salary Package', subHeader: 'Creating salary package depend on user role', link: '/admin-home/SETTING/salaryPackage' , img: '/assets/admin/salary_package.jpg'},

  ]

}
