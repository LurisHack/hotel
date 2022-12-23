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
import {
  WelcomePresentationCreationComponent
} from "../creationComponent/welcome-presentation-creation/welcome-presentation-creation.component";
import {RoomCreationComponent} from "../creationComponent/room-creation/room-creation.component";
import {RooftopbarComponent} from "../component/rooftopbar/rooftopbar.component";
import {PlaygroundComponent} from "../component/playground/playground.component";
import {StoreUiComponent} from "../uiComponent/store-ui/store-ui.component";
import {PackageConfigurationComponent} from "../creationComponent/package-creation/package-configuration.component";
import {PlayGroundCreationComponent} from "../creationComponent/play-ground-creation/play-ground-creation.component";
import {SettingRoofTopBarComponent} from "../creationComponent/roof-top-bar-creation/setting-roof-top-bar.component";
import {RoomTypeCreationComponent} from "../creationComponent/room-type-creation/room-type-creation.component";

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
            path: 'roomType',
            component: RoomTypeCreationComponent
          },
          {
            path: 'buildingList',
            component: BuildingListComponent,
          },
          {
            path: 'buildingList/roomList/:id',
            component: RoomCreationComponent
          },
          {
            path: 'packageConfiguration',
            component: PackageConfigurationComponent
          },
          {
            path: 'rooftopBar',
            component: SettingRoofTopBarComponent
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
