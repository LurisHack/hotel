import {Component, ViewChild} from '@angular/core';
import {currentTime} from "../../../utility/function/timerFunction";
import {AdminComponentModule} from "../../component/admin-component.module";
import {calculateTime} from "../../../utility/function/timerFunction";
import {ActivatedRoute} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {IonInput, IonSelect} from "@ionic/angular";
import {ToastService} from "../../../utility/service/toast.service";
import {RoomTypePackageFilterPipe} from "../../../utility/pipe/room-type-package-filter.pipe";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RoomTypePackageFilterPipe],
  selector: 'app-room-type-package-creation',
  templateUrl: './room-type-package-creation.component.html',
  styleUrls: ['./room-type-package-creation.component.scss'],
})

export class RoomTypePackageCreationComponent {

  @ViewChild('roomSectionPackagePrice') roomPackagePrice: any;
  @ViewChild('roomSectionTimer') roomSectionTimer: any;

  oneMinute = 60
  oneHour = this.oneMinute * 60

  checkInTime = currentTime().seconds

  setWidth = 0

  room = {
    startTime: 0,
    package: 0
  }

  constructor(public activatedRoute: ActivatedRoute, private toastService: ToastService,
              public siteInformationService: SiteInformationService) {
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

  addRoomPackage() {

   const id = this.activatedRoute.snapshot.params['id'];
   const hour = (<IonSelect>this.roomSectionTimer).value
    const price = (<IonInput>this.roomPackagePrice).value

    if(!id){
      this.toastService.toast({message: 'Invalid room type id!', position: 'bottom', duration: 2000})
      return;
    }

    if (!hour ||
      !price){
      this.toastService.toast({message: 'Please fill correctly', position: 'bottom', duration: 2000})
      return;
    }


    this.siteInformationService.addRoomPackage(id,hour,price, 'section')
  }
}
