import { Component } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {RouterLink} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {RoomFilterPipe} from "../../../utility/pipe/room-filter.pipe";

@Component({
  standalone:true,
  imports: [AdminComponentModule, RouterLink, RoomFilterPipe],
  selector: 'app-roof-top-bar-creation',
  templateUrl: './roof-top-bar-creation.component.html',
  styleUrls: ['./roof-top-bar-creation.component.scss'],
})

export class RoofTopBarCreationComponent{

  check = true;

  constructor(public siteInformationService: SiteInformationService) {
  }



  addBuildingName() {
    // this.siteInformationService.RoofTopBar()
  }

  deleteBuildName(id: string) {
    this.siteInformationService.deleteSiteInformation(id)
  }

  editBuiltName(id: string) {
    // this.siteInformationService.editBuildingName(id)
    this.check = false;
  }


  doneBuiltName(id: string) {
    this.check = true;
  }

}


