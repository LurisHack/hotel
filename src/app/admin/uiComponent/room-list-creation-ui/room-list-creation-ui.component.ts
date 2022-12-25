import {Component, ViewChild} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {IonSelect} from "@ionic/angular";
import {RoomListCreationPipe} from "../../../utility/pipe/room-list-creation.pipe";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RoomListCreationPipe, RouterLink],
  selector: 'app-room-list-creation-ui',
  templateUrl: './room-list-creation-ui.component.html',
  styleUrls: ['./room-list-creation-ui.component.scss'],
 })

export class RoomListCreationUiComponent {

  @ViewChild('roomName') roomName: any;
  @ViewChild('roomType') roomType: any;

  constructor(public activatedRoute: ActivatedRoute,
              public siteInformationService: SiteInformationService) {
    // this.siteInformationService.siteInformation.roomName
    //  .filter(rooms => rooms === this.activatedRoute.snapshot.params['id'])
  }

  addRoom() {

    let buildingId = this.activatedRoute.snapshot.params['id'];

    if(!this.siteInformationService.siteInformation){
      console.log('site information service error ' , this.siteInformationService.siteInformation)
      return
    }

    this.siteInformationService.addRoomName(
       this.roomName.value,
      this.siteInformationService.siteInformation.buildingName.filter(buildingName => buildingName.id === buildingId)[0],
      (<IonSelect>this.roomType).value
      )
  }

  deleteRoomName(id: string) {
    this.siteInformationService.deleteRoomName(id)
  }

  editBuiltName(id: any) {

  }
}
