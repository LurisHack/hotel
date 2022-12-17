import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AdminHomePageRoutingModule} from './admin-home-routing.module';
import {AdminHomePage} from './admin-home.page';
import {STOREComponent} from "../component/store/store.component";
import {ROOMComponent} from "../component/room/room.component";
import {INVENTORYComponent} from "../component/inventory/inventory.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomePageRoutingModule,
    ROOMComponent, STOREComponent, INVENTORYComponent,
  ],
  declarations: [AdminHomePage,
  ]
})
export class AdminHomePageModule {
}
