import { Component } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {AlertService} from "../../utility/service/alert.service";
import {Store} from "@ngrx/store";
import {FirestoreService} from "../../../utility/service/firestore.service";
import {SiteInformation} from "../../../utility/enum/site-information";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-siteInformation-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  providers: [AlertService, FirestoreService]
})
export class RoomListComponent{

  constructor(private alertService: AlertService, private firebaseService: FirestoreService,
               private store: Store<{room: {buildingName: string}}>) {}

  addBuildingName() {
    this.alertService.alert()
      .then( ( alert: any) => {
       console.log(alert)
         // this.store.dispatch(
         //  {type: ADD_BUILDING_NAME, payload: {buildingName: alert.data.values[0]}})
        this.firebaseService.addDoc({doc: SiteInformation.SITE_INFORMATION, data: {test: 'test'}})

      })
  }

}
