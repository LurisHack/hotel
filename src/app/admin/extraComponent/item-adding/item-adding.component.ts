import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomDataModel} from "../../../utility/model/room-data";
import {RoomTypePackageFilterPipe} from "../../../utility/pipe/room-type-package-filter.pipe";
import {FirestoreService} from "../../../utility/service/firestore.service";
import {IonInput} from "@ionic/angular";

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

    let tempData = this.siteInformationService.siteInformation.roomName
      .filter(rooms => rooms.id === this.roomData?.id )[0]

    console.log(tempData)


    Object.assign(tempData, {stayData : {stayTimeLength: [(<IonInput>this.sectionSelectValue).value]}})

    console.log(tempData)
    return


    Object.assign(this.siteInformationService.siteInformation,
      {roomName: this.siteInformationService.siteInformation.roomName
          .map((rooms:any) => rooms.id === this.roomData?.id ?
            tempData : rooms )})

     console.log(this.siteInformationService.siteInformation)

  }
}
