import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {ACTIVATED_ROUTE} from "./multi/store/activatedRoute/activatedRoute.action";
import * as firebase from "@firebase/firestore"



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<{ activatedRoute: { activatedRoute: string } }>,
              ) {


    console.log(new Date(firebase.Timestamp.now().seconds * 1000))



console.log( new Date().toLocaleTimeString())
    console.log(new Date().toISOString())
    console.log(new Date().toLocaleDateString())

    activatedRoute.fragment.subscribe((s: any) => {
      store.dispatch({type: ACTIVATED_ROUTE, payload: s})
    })

  }

}
