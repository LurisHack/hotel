import { Component } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {RouterModule} from "@angular/router";
import {BuildingListUiComponent} from "../../uiComponent/building-list-ui/building-list-ui.component";


@Component({
  standalone: true,
  imports: [AdminComponentModule, RouterModule, BuildingListUiComponent],
  selector: 'app-siteInformation-list',
  templateUrl: './building-list-creation.component.html',
  styleUrls: ['./building-list-creation.component.scss'],
 })
export class BuildingListCreationComponent {


}
