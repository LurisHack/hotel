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
import {PlaygroundInventoryComponent} from "../inventoryComponent/playground-inventory/playground-inventory.component";
import {
  RoofTopBarInventoryComponent
} from "../inventoryComponent/roof-top-bar-inventory/roof-top-bar-inventory.component";

import {RoomInventoryComponent} from "../extraComponent/room-inventory/room-inventory.component";
import {StoreInventoryComponent} from "../inventoryComponent/store-inventory/store-inventory.component";
import {RestaurantInventoryComponent} from "../inventoryComponent/restaurant-inventory/restaurant-inventory.component";
import {PosInventoryComponent} from "../inventoryComponent/pos-inventory/pos-inventory.component";
import {DamageInventoryComponent} from "../inventoryComponent/damage-inventory/damage-inventory.component";
import {ExpendInventoryComponent} from "../inventoryComponent/expend-inventory/expend-inventory.component";
import {PayrollComponent} from "../component/payroll/payroll.component";
import {
  SalaryPackageCreationComponent
} from "../creationComponent/salary-package-creation/salary-package-creation.component";
import {AdminWelcomeComponentComponent} from "../component/welcome-component/admin-welcome-component.component";
import {SettingUiComponentComponent} from "../uiComponent/setting-ui-component/setting-ui-component.component";
import {PosComponent} from "../component/pos/pos.component";
import {PosCreationComponent} from "../creationComponent/pos-creation/pos-creation.component";


const routes: Routes = [
  {
    path: '',
    component: AdminHomePage,
    children: [
      {
        path: 'ADMINWELCOMCOMPONENT',
        component: AdminWelcomeComponentComponent
       },
      {
        path: 'ROOM',
        component: ROOMComponent
      },
      {
        path:'POS',
        component: PosComponent
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
            path: 'settingWelcome',
            component: SettingUiComponentComponent
          },
          {
            path: 'welcomePresentation',
            component: WelcomePresentationCreationComponent,
          },
          {
            path: 'roomTypeCreation',
            component: RoomTypeCreationComponent
          },
          {
            path: 'roomTypeCreation/roomTypePackageCreation/:id',
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
            path: 'posCreation',
            component: PosCreationComponent
          },
          {
            path: 'rooftopBar',
            component: RoofTopBarCreationComponent
          },
          {
            path: 'playground',
            component: PlayGroundCreationComponent
          },
          {
           path: 'salaryPackage',
           component: SalaryPackageCreationComponent
          }
        ],

      },

      {
        path: 'INVENTORY',
        component: INVENTORYComponent,
        children: [
          {
            path:'room',
            component: RoomInventoryComponent
          },

          {
            path: 'rooftopBar',
            component: RoofTopBarInventoryComponent
          },
          {
            path: 'playground',
            component: PlaygroundInventoryComponent
          },
          {
            path:'store',
            component: StoreInventoryComponent
          },
          {
            path:'restaurant',
            component: RestaurantInventoryComponent
          },
          {
            path: 'pos',
            component: PosInventoryComponent
          },
          {
            path: 'damage',
            component: DamageInventoryComponent
          },
          {
            path:'expend',
            component: ExpendInventoryComponent
          },
          {

          },
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

        path:'PAYROLL',
        component: PayrollComponent
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
