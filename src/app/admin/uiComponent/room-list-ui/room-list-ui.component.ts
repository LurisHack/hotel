import {Component, ViewChild} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomFilterPipe} from "../../../utility/pipe/room-filter.pipe";
import {IonInput, IonSelect} from "@ionic/angular";

@Component({
  standalone: true,
  imports: [AdminComponentModule,RoomFilterPipe, RouterLink],
  selector: 'app-room-list-ui',
  templateUrl: './room-list-ui.component.html',
  styleUrls: ['./room-list-ui.component.scss'],
 })

export class RoomListUiComponent{

  @ViewChild('roomName') roomName: any;
  @ViewChild('roomType') roomType: any;

  constructor(public activatedRoute: ActivatedRoute,
              public siteInformationService: SiteInformationService) {
    // this.siteInformationService.siteInformation.roomName
    //  .filter(rooms => rooms === this.activatedRoute.snapshot.params['id'])
  }

  addRoom() {
    this.siteInformationService.addRoomName(
       this.roomName.value, this.activatedRoute.snapshot.params['id'],
      (<IonSelect>this.roomType).value)
  }
}
