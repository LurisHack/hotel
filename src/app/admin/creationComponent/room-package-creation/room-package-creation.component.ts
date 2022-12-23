import { Component } from '@angular/core';
import {currentTime} from "../../../utility/function/timerFunction";
import {AdminComponentModule} from "../../component/admin-component.module";
import {calculateTime} from "../../../utility/function/timerFunction";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-room-package-creation',
  templateUrl: './room-package-creation.component.html',
  styleUrls: ['./room-package-creation.component.scss'],
})

export class RoomPackageCreationComponent{

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
