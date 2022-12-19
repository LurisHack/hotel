import { Component } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {AlertService} from "../../../utility/service/alert.service";
import {Store} from "@ngrx/store";
import {FirestoreService} from "../../../utility/service/firestore.service";
import {SiteInformationState} from "../../../utility/store/siteInformation/siteInformation.reducer";
import {RouterModule} from "@angular/router";
import {Subscription} from "rxjs";
import {SiteInformation} from "../../../utility/enum/site-information";
import { SITE_INFORMATION } from "../../../utility/store/siteInformation/siteInformation.action";
import {generateId} from "../../../utility/function/generateId";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterModule],
  selector: 'app-siteInformation-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  providers: [AlertService, FirestoreService]
})
export class RoomListComponent{

  storeSubscription: Subscription;

  siteInformation: { buildingName: string[] } = {buildingName: []}

  constructor(private alertService: AlertService,
              private firebaseService: FirestoreService,
               private store: Store<{siteInformation: SiteInformationState}>) {

    this.storeSubscription = this.store.select('siteInformation').subscribe(siteInformation => {
     console.log(siteInformation)
       // this.siteInformation = siteInformation
     })
  }


  addBuildingName() {

    this.alertService.alert()
      .then( ( alert: any) => {

       console.log(alert)
        console.log(this.siteInformation)

         Object.assign(this.siteInformation,
         {buildingName: [...this.siteInformation.buildingName, {name: alert.data.values[0], id: generateId()}]})

        console.log(this.siteInformation)


        this.firebaseService.addDoc({doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation})
            .then((t: any) => {
              console.log(t)

              this.store.dispatch(
                {type: SITE_INFORMATION, payload:  this.siteInformation})

            })
            .catch((c: any) => console.log(c))
      })
  }

}
