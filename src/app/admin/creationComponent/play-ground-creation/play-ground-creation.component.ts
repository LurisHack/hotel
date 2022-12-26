import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {PlaygroundComponent} from "../../component/playground/playground.component";
import {siteInformationAction} from "../../../utility/store/siteInformation/siteInformation.action";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [AdminComponentModule, PlaygroundComponent],
  selector: 'app-play-ground-creation',
  templateUrl: './play-ground-creation.component.html',
  styleUrls: ['./play-ground-creation.component.scss'],
  providers: [RouterModule]
})
export class PlayGroundCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  addBuildingName() {

  }

  addPlaygroundName() {

  }
}
