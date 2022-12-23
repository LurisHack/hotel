import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomFilterPipe} from "../../../utility/pipe/room-filter.pipe";

@Component({

  standalone:true,
  imports: [AdminComponentModule, RouterLink, RoomFilterPipe],
  selector: 'app-room-type-creation',
  templateUrl: './room-type-creation.component.html',
  styleUrls: ['./room-type-creation.component.scss'],
})
export class RoomTypeCreationComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute,
              public siteInformationService: SiteInformationService) {}

  ngOnInit() {}

  AddRoomType() {
  this.siteInformationService.addRoomName(this.activatedRoute.snapshot.params['id'])
  }
}
