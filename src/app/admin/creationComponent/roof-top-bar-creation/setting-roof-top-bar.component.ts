import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomFilterPipe} from "../../../utility/pipe/room-filter.pipe";

@Component({
  standalone:true,
  imports: [AdminComponentModule, RouterLink, RoomFilterPipe],
  selector: 'app-roof-top-bar-creation',
  templateUrl: './setting-roof-top-bar.component.html',
  styleUrls: ['./setting-roof-top-bar.component.scss'],
})
export class SettingRoofTopBarComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public siteInformationService: SiteInformationService
  ) { }

  ngOnInit() {}

  SettingRoofTopBar() {
    this.siteInformationService.addRoomName(this.activatedRoute.snapshot.params['id'])
  }
}
