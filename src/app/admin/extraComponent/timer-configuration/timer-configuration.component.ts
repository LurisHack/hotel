import { Component, OnInit } from '@angular/core';
import {currentTime} from "../../../utility/function/timerFunction";
import {AdminComponentModule} from "../../component/admin-component.module";

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
    startTime: 0,
    package: this.oneHour
  }

  constructor() {

    this.checkInTime = this.oneHour



  }

  ngOnInit() {
   }

   checkIn(){

    this.room.startTime = currentTime().seconds
     console.log(this.room)

   }

  calculateTime() {



    console.log((this.room.startTime + this.room.package) - currentTime().seconds)



   }


}
