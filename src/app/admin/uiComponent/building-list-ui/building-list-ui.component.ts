import { Component } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import { RouterModule} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {FirestoreService} from "../../../utility/service/firestore.service";
import {AlertService} from "../../../utility/service/alert.service";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterModule],
  selector: 'app-building-list-ui',
  templateUrl: './building-list-ui.component.html',
  styleUrls: ['./building-list-ui.component.scss'],
  providers: [SiteInformationService, FirestoreService, AlertService, RouterModule]
})

export class BuildingListUiComponent{

  constructor(public siteInformationService: SiteInformationService) {}

  addBuildingName() {
    this.siteInformationService.addBuildingName()
  }

  deleteBuildName(id: string) {
    this.siteInformationService.deleteSiteInformation(id)
  }

  editBuiltName(id: string) {
    this.siteInformationService.editBuildingName(id)
  }


}
