import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomFilterPipe} from "../../../utility/pipe/room-filter.pipe";
import {IonInput} from "@ionic/angular";
import {ToastService} from "../../../utility/service/toast.service";
import {generateId} from "../../../utility/function/generateId";

@Component({
  standalone:true,
  imports: [AdminComponentModule, RouterLink, RoomFilterPipe],
  selector: 'app-room-type-creation',
  templateUrl: './room-type-creation.component.html',
  styleUrls: ['./room-type-creation.component.scss'],
})

export class RoomTypeCreationComponent implements OnInit {

  @ViewChild('roomTypeName') roomTypeName: any

  constructor(public activatedRoute: ActivatedRoute, private toastService: ToastService,
              public siteInformationService: SiteInformationService) {}

  ngOnInit() {}

  AddRoomType() {

    let roomTypeName = (<IonInput>this.roomTypeName).value

    if (!roomTypeName) {
      this.toastService.toast({message: 'Please fill room type', position: 'bottom', duration: 2000})
      return
    }

      this.siteInformationService
        .addRoomType(roomTypeName, generateId(), 'roomType')
    }


  deleteRoomType(roomTypeId: string) {
    this.siteInformationService
      .deleteRoomType(roomTypeId, 'roomType')
  }
}
