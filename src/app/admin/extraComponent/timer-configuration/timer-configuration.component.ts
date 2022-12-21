import { Component, OnInit } from '@angular/core';
import {currentTime, rxjsTimer, timerFunction} from "../../../utility/function/timerFunction";
import {AdminComponentModule} from "../../component/admin-component.module";
import {interval} from "rxjs";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-timer-configuration',
  templateUrl: './timer-configuration.component.html',
  styleUrls: ['./timer-configuration.component.scss'],
})
export class TimerConfigurationComponent implements OnInit {

  oneMinute = 60000
  oneHour = this.oneMinute * 60

  checkInTime = currentTime().seconds

  room = {
    startTime: null
  }

  constructor() {

    this.checkInTime = this.oneHour



  }

  ngOnInit() {
   }

   checkin(){

   }

  getCurrentTime() {
    console.log(currentTime().seconds + this.oneHour)

    console.log(rxjsTimer())

  }

  checkIn() {

  }
}
