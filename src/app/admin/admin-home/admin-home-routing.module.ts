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
import {BuildingListComponent} from "../extraComponent/building-list/building-list.component";
import {WelcomePresentationComponent} from "../extraComponent/welcome-presentation/welcome-presentation.component";
import {RoomListComponent} from "../extraComponent/room-list/room-list.component";
import {RooftopbarComponent} from "../component/rooftopbar/rooftopbar.component";
import {PlaygroundComponent} from "../component/playground/playground.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomePage,
    children: [
      {
        path: 'ROOM',
        component: ROOMComponent
      },
      {
        path: 'ROOFTOPBAR',
        component: RooftopbarComponent
      },{
        path: 'PLAYGROUND',
        component: PlaygroundComponent
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
            path: 'buildingList',
            component: BuildingListComponent,
          },
          {
                path: 'buildingList/roomList/:id',
                component: RoomListComponent
              }
            ]
          },
      {
        path: 'welcomePresentation',
        component: WelcomePresentationComponent
      }]
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


@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class AdminHomePageRoutingModule {
}
