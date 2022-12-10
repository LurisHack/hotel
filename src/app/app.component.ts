import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {ACTIVATED_ROUTE} from "./multi/store/activatedRoute/activatedRoute.action";
import {AuthService} from "./user/component/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {


  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<{ activatedRoute: { activatedRoute: string } }>) {

    activatedRoute.fragment.subscribe((s: any) => {
      store.dispatch({type: ACTIVATED_ROUTE, payload: s})
    })

  }

}
