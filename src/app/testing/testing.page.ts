import { Component, OnInit } from '@angular/core';
import {ToastService} from "../utility/service/toast.service";
import {Store} from "@ngrx/store";
import {ADD_VALUE} from "./store/testing.action";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  providers: [ToastService]
})
export class TestingPage implements OnInit {

  constructor(private toastService: ToastService,
              public store: Store<{testingReducer: {testingReducer: number[]} ,
              activatedRoute: {activatedRoute: string}}>) { }

  ngOnInit() {


    setTimeout(() => {
      this.store.dispatch({payload:[4], type: ADD_VALUE})
      this.store.select('activatedRoute')
        .subscribe(s => console.log(s))
    },10000)

    setTimeout(() => {
      this.store.dispatch({payload:[5], type: ADD_VALUE})

    },20000)



    this.store.subscribe(s => console.log(s))
    this.store.select('testingReducer').subscribe(s => console.log(s))

  }

}
