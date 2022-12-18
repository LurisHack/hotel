import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {ACTIVATED_ROUTE} from "./utility/store/activatedRoute/activatedRoute.action";
import * as firebase from "@firebase/firestore"
import {FirestoreService} from "./utility/service/firestore.service";
import {SiteInformation} from "./utility/enum/site-information";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [FirestoreService]
})

export class AppComponent {

  constructor(private activatedRoute: ActivatedRoute,  private firestoreService: FirestoreService,
              private store: Store<{ activatedRoute: { activatedRoute: string } }>) {

    console.log(new Date(firebase.Timestamp.now().seconds * 1000))

    activatedRoute.fragment.subscribe((s: any) => {
      store.dispatch({type: ACTIVATED_ROUTE, payload: s})
    })
    this.firestoreService.getDoc({doc: SiteInformation.SITE_INFORMATION})

  }

}
