import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {AlertService} from "../../utility/service/alert.service";
import {Store} from "@ngrx/store";
import {ADD_BUILDING_NAME} from "../../../utility/store/siteInformation/siteInformation.action";
import {FirestoreService} from "../../../utility/service/firestore.service";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-siteInformation-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  providers: [AlertService]
})
export class RoomListComponent{

  constructor(private alertService: AlertService,
               private store: Store<{room: {buildingName: string}}>) {}

  addBuildingName() {
    this.alertService.alert()
      .then( ( alert: any) => {
       console.log(alert)
         // this.store.dispatch(
         //  {type: ADD_BUILDING_NAME, payload: {buildingName: alert.data.values[0]}})
        // this.firestoreService.getDoc()
      })
  }

}
