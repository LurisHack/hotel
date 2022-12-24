import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {ACTIVATED_ROUTE} from "./utility/store/activatedRoute/activatedRoute.action";
import * as firebase from "@firebase/firestore"
import {FirestoreService} from "./utility/service/firestore.service";
import {SiteInformation} from "./utility/enum/site-information";
 import {SITE_INFORMATION} from "./utility/store/siteInformation/siteInformation.action";
import {SiteInformationState} from "./utility/store/siteInformation/siteInformation.reducer";
import {SiteInformationService} from "./utility/service/siteInformation.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [FirestoreService]
})

export class AppComponent {

   constructor(private activatedRoute: ActivatedRoute,
               private siteInformationService: SiteInformationService,
               private firestoreService: FirestoreService,
              // private store: Store<{siteInformation: SiteInformationState}>
   ) {

    console.log(new Date(firebase.Timestamp.now().seconds * 1000))



    this.firestoreService.getDocSnapShot({doc: SiteInformation.SITE_INFORMATION})
         .subscribe((siteInformationData: any) => {
           console.log(siteInformationData)
           // this.store.dispatch({type: SITE_INFORMATION, payload: siteInformationData})
           this.siteInformationService.siteInformation = siteInformationData
         },(error: any) => console.log(error))


  }


}
