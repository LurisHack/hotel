import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminHomePage} from './admin-home.page';
import {ROOMComponent} from "../component/room/room.component";
import {RESTURANTComponent} from "../component/resturant/resturant.component";
import {INVENTORYComponent} from "../component/inventory/inventory.component";
import {LOGComponent} from "../component/log/log.component";
import {SETTINGComponent} from "../component/setting/setting.component";
import {USERSComponent} from "../component/users/users.component";
import {PERMISSIONSComponent} from "../component/permissions/permissions.component";
import {RoomListComponent} from "../extraComponent/room-list/room-list.component";
import {WelcomePresentationComponent} from "../extraComponent/welcome-presentation/welcome-presentation.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomePage,
    children:[
      {
        path: 'ROOM',
        component: ROOMComponent
      },
      
      {
        path: 'RESTAURANT',
        component: RESTURANTComponent
      },
      {
        path: 'INVENTORY',
        component: INVENTORYComponent
      },
      {
        path: 'LOG',
        component: LOGComponent
      },
      {
        path: 'SETTING',
        component: SETTINGComponent,
        children: [
          {
            path: 'roomList',
            component: RoomListComponent
          },
          {
            path: 'welcomePresentation',
            component: WelcomePresentationComponent
           }
        ]
      },
      {
        path: 'USERS',
        component: USERSComponent
      },
      {
        path: 'PERMISSIONS',
        component: PERMISSIONSComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule],
})
export class AdminHomePageRoutingModule {
}
