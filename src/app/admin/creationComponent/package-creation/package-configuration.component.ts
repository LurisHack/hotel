import { Component, OnInit } from '@angular/core';
import {calculateTime, currentTime} from "../../../utility/function/timerFunction";
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-package-creation',
  templateUrl: './package-creation.component.html',
  styleUrls: ['./package-creation.component.scss'],
})
export class PackageConfigurationComponent implements OnInit {

  oneMinute = 60
  oneHour = this.oneMinute * 60

  checkInTime = currentTime().seconds

  setWidth = 0

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


     console.log(this.room)


   }

  calculateTime() {

    this.room.startTime = currentTime().seconds
    this.room.package = this.oneMinute

    calculateTime({startTime: this.room.startTime, package: this.room.package})
    .subscribe((s:any) => {
      console.log(s)
      this.setWidth = s
    })




   }


}
