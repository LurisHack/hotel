import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHomePageRoutingModule } from './admin-home-routing.module';

import { AdminHomePage } from './admin-home.page';
import {POSComponent} from "../component/pos/pos.component";
import {TestingComponent} from "../../testingComponent/testing/testing.component";
import {STOREComponent} from "../component/store/store.component";
import {RoomUIComponent} from "../subComponent/room-ui/room-ui.component";
import {ROOMComponent} from "../component/room/room.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomePageRoutingModule,
  ],
  declarations: [AdminHomePage, POSComponent, STOREComponent, TestingComponent, RoomUIComponent, ROOMComponent]
})
export class AdminHomePageModule {}
