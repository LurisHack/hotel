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
import {StoreUiComponent} from "../uiComponent/store-ui/store-ui.component";
import {PackageConfigurationComponent} from "../extraComponent/package-configuration/package-configuration.component";
import {SettingPlayGroundComponent} from "../extraComponent/setting-play-ground/setting-play-ground.component";
import {SettingRoofTopBarComponent} from "../extraComponent/setting-roof-top-bar/setting-roof-top-bar.component";
import {SettingStoreComponent} from "../extraComponent/setting-store/setting-store.component";

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
            component: WelcomePresentationComponent,
          },
          {
            path: 'buildingList',
            component: BuildingListComponent,
          },
          {
            path: 'buildingList/roomList/:id',
            component: RoomListComponent
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
            component: SettingPlayGroundComponent
          },
          {
            path: 'store',
            component: SettingStoreComponent
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
