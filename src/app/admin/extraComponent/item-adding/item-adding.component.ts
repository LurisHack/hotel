import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomDataModel} from "../../../utility/model/room-data";
import {RoomTypePackageFilterPipe} from "../../../utility/pipe/room-type-package-filter.pipe";
import {FirestoreService} from "../../../utility/service/firestore.service";
import {IonInput} from "@ionic/angular";
import {SiteInformationEnum} from "../../../utility/enum/site-information-enum";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RoomTypePackageFilterPipe],
  selector: 'app-item-adding',
  templateUrl: './item-adding.component.html',
  styleUrls: ['./item-adding.component.scss'],
})
export class ItemAddingComponent{

  @Input() roomData: RoomDataModel | undefined
  segmentValue: string = 'Section';

  @ViewChild('sectionSelectValue') sectionSelectValue: any

  constructor(public siteInformationService: SiteInformationService,
              private firestoreService: FirestoreService) {
  }


  segmentChange($event: any) {
    this.segmentValue = $event.detail.value
  }

  setStayTime() {

    console.log(this.siteInformationService.siteInformation)

    console.log((<IonInput>this.sectionSelectValue).value)


    if(this.roomData){

      Object.assign(this.roomData, {stayData: [{stayTimeLength: (<IonInput>this.sectionSelectValue).value }]} )

      console.log(this.roomData)
    }


    // this.siteInformationService.siteInformation?.roomData
    //   .map(rooms =>
    //      rooms.id === this.roomData?.id ?
    //       {...rooms,stayData : {stayTimeLength: [(<IonInput>this.sectionSelectValue).value]}} : rooms)
    //


    // Object.assign(tempData, {stayData : {stayTimeLength: [(<IonInput>this.sectionSelectValue).value]}})
    //
    // console.log(tempData)
    // return


    // Object.assign(this.siteInformationService.siteInformation,
    //   {roomName: this.siteInformationService.siteInformation.roomName
    //       .map((rooms:any) => rooms.id === this.roomData?.id ?
    //         tempData : rooms )})

     console.log(this.siteInformationService.siteInformation)

  }

  checkIn() {

    if(!this.siteInformationService.siteInformation){
      return
    }

    console.log(this.roomData)

    Object.assign(this.siteInformationService.siteInformation, {
      roomData: this.siteInformationService.siteInformation.roomData
        .map(room => room.id === this.roomData?.id ? {...this.roomData, roomState: 'CheckIn'}: room)
    })

    console.log(this.siteInformationService.siteInformation)


    this.firestoreService.updateDoc({doc: SiteInformationEnum.SITE_INFORMATION,
    data:  this.siteInformationService.siteInformation?.roomData, updatePropertyName: 'roomData'})
      .then((t: any) => console.log('check in updated ', t))
      .catch((c: any) => console.log('check in error ', c))
  }
}
