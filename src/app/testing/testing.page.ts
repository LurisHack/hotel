import { Component, OnInit } from '@angular/core';
import {ToastService} from "../utility/service/toast.service";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  providers: [ToastService]
})
export class TestingPage implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

}
