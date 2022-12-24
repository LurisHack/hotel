import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {PlaygroundComponent} from "../../component/playground/playground.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, PlaygroundComponent],
  selector: 'app-play-ground-creation',
  templateUrl: './play-ground-creation.component.html',
  styleUrls: ['./play-ground-creation.component.scss'],
})
export class PlayGroundCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  addBuildingName() {

  }
}
