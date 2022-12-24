import {Component, ViewChild} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import { RouterModule} from "@angular/router";
import {SiteInformationService} from "../../../utility/service/siteInformation.service";
import {IonInput} from "@ionic/angular";

@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterModule],
  selector: 'app-building-list-ui',
  templateUrl: './building-list-ui.component.html',
  styleUrls: ['./building-list-ui.component.scss'],
  providers: [RouterModule]
})

export class BuildingListUiComponent{

  @ViewChild('buildingName') buildingName: any;
  check = true;

  constructor(public siteInformationService: SiteInformationService) {}

  addBuildingName() {
    this.siteInformationService.addBuildingName((<IonInput>this.buildingName).value)
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
