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
import {BuildingListCreationComponent} from "../creationComponent/building-list-creation/building-list-creation.component";
import { WelcomePresentationCreationComponent } from "../creationComponent/welcome-presentation-creation/welcome-presentation-creation.component";
import {RoomListCreationComponent} from "../creationComponent/room-list-creation/room-list-creation.component";
import {RooftopbarComponent} from "../component/rooftopbar/rooftopbar.component";
import {PlaygroundComponent} from "../component/playground/playground.component";
import {StoreUiComponent} from "../uiComponent/store-ui/store-ui.component";
import {PlayGroundCreationComponent} from "../creationComponent/play-ground-creation/play-ground-creation.component";
import {RoofTopBarCreationComponent} from "../creationComponent/roof-top-bar-creation/roof-top-bar-creation.component";
import {RoomTypeCreationComponent} from "../creationComponent/room-type-creation/room-type-creation.component";
import {RoomTypePackageCreationComponent} from "../creationComponent/room-type-package-creation/room-type-package-creation.component";

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
      },
      {
        path: 'PLAYGROUND',
        component: PlaygroundComponent
      },
      {
        path: 'RESTAURANT',
        component: RESTURANTComponent
      },
      {
        path: 'STORE',
        component: StoreUiComponent
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
            path: 'welcomePresentation',
            component: WelcomePresentationCreationComponent,
          },
          {
            path: 'roomTypeCreation',
            component: RoomTypeCreationComponent
          },
          {
            path: 'roomTypeCreation/roomPackageCreation/:id',
            component: RoomTypePackageCreationComponent,
          },
          {
            path: 'buildingList',
            component: BuildingListCreationComponent,
          },
          {
            path: 'buildingListCreation/roomListCreation/:id',
            component: RoomListCreationComponent
          },
          {
            path: 'rooftopBar',
            component: RoofTopBarCreationComponent
          },
          {
            path: 'playground',
            component: PlayGroundCreationComponent
          }
        ]
      },
      {
        path: 'welcomePresentation',
        component: WelcomePresentationCreationComponent
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

  }]


    @NgModule({
      imports: [RouterModule.forChild(routes),],
      exports: [RouterModule],
    })
    export class AdminHomePageRoutingModule {
    }
