import { Component, OnInit } from '@angular/core';
import {calculateTime, currentTime} from "../../../utility/function/timerFunction";
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-package-configuration',
  templateUrl: './package-configuration.component.html',
  styleUrls: ['./package-configuration.component.scss'],
})
export class PackageConfigurationComponent implements OnInit {

  oneMinute = 60
  oneHour = this.oneMinute * 60

  checkInTime = currentTime().seconds

  room = {
    startTime: 0,
    package: 0
  }

  constructor() {

    this.checkInTime = this.oneMinute


  }

  ngOnInit() {
   }

   checkIn(){

    this.room.startTime = currentTime().seconds
     this.room.package = this.oneMinute
     console.log(this.room)


   }

  calculateTime() {


    calculateTime({startTime: this.room.startTime, package: this.room.package})




   }


}
