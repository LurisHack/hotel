import { Component } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {AlertService} from "../../../utility/service/alert.service";
import {Store} from "@ngrx/store";
import {FirestoreService} from "../../../utility/service/firestore.service";
import {ADD_BUILDING_NAME} from "../../../utility/store/siteInformation/siteInformation.action";
import {SiteInformationState} from "../../../utility/store/siteInformation/siteInformation.reducer";
import {RoomService} from "../../../utility/service/room.service";
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

  constructor(private alertService: AlertService,
              private firebaseService: FirestoreService,
               private roomService: RoomService,
               private store: Store<{siteInformation: SiteInformationState}>) {}

  addBuildingName() {
    this.alertService.alert()
      .then( ( alert: any) => {
       console.log(alert)


        console.log(this.roomService.siteInformation)

        this.roomService.siteInformation.buildingName = alert.data.values[0]

          this.firebaseService.addDoc({doc: SiteInformation.SITE_INFORMATION, data: this.roomService.siteInformation})
            .then((t: any) => {
              console.log(t)

              this.store.dispatch(
                {type: ADD_BUILDING_NAME, payload:  alert.data.values[0]})


            })
            .catch((c: any) => console.log(c))
      })
  }

}
