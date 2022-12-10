import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminHomePage} from './admin-home.page';
import {ROOMComponent} from "../component/room/room.component";
import {POSComponent} from "../component/pos/pos.component";
import {STOREComponent} from "../component/store/store.component";
import {RESTURANTComponent} from "../component/resturant/resturant.component";
import {INVENTORYComponent} from "../component/inventory/inventory.component";
import {LOGComponent} from "../component/log/log.component";
import {SETTINGComponent} from "../component/setting/setting.component";
import {USERSComponent} from "../component/users/users.component";
import {PERMISSIONSComponent} from "../component/permissions/permissions.component";

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
        path: 'POS',
        component: POSComponent
      },
      {
        path: 'STORE',
        component: STOREComponent
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
        component: SETTINGComponent
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
