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
    setTimeout(() => {
      this.toastService.toast({header: 'Hello',
        message: 'Welcome',
      duration: 2000,
      position: "bottom",
      animated: true,
      color: 'secondary',
      icon: 'home',})
    },2000)
  }

}
