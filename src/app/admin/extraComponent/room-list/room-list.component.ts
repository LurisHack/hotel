import { Component } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {AlertService} from "../../../utility/service/alert.service";
import {Store} from "@ngrx/store";
import {FirestoreService} from "../../../utility/service/firestore.service";
import {ADD_BUILDING_NAME} from "../../../utility/store/siteInformation/siteInformation.action";
import {SiteInformationState} from "../../../utility/store/siteInformation/siteInformation.reducer";
import {RoomService} from "../../../utility/service/room.service";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-siteInformation-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  providers: [AlertService, FirestoreService]
})
export class RoomListComponent{

  constructor(private alertService: AlertService,
              private firebaseService: FirestoreService,
               private roomService: RoomService,
               private store: Store<{siteInformation: SiteInformationState}>) {}

  addBuildingName() {
    this.alertService.alert()
      .then( ( alert: any) => {
       console.log(alert)

        // this.store.dispatch(
        //   {type: ADD_BUILDING_NAME, payload:  alert.data.values[0]})

        console.log(this.roomService.storeSiteInformation)

        // this.firebaseService.addDoc({doc: SiteInformation.SITE_INFORMATION, data: {test: 'test'}})

      })
  }

}
