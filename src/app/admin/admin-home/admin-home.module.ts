import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminHomePageRoutingModule } from './admin-home-routing.module';
import { AdminHomePage } from './admin-home.page';
import {ROOMComponent} from "../component/room/room.component";
import {INVENTORYComponent} from "../component/inventory/inventory.component";
import {MultiHeaderComponent} from "../../utility/component/multi-header/multi-header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomePageRoutingModule,
    ROOMComponent,
    INVENTORYComponent,
    MultiHeaderComponent,
   ],
  declarations: [AdminHomePage]
})
export class AdminHomePageModule {}
