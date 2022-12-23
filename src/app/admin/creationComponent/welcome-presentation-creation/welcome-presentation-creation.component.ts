import { Component, OnInit } from '@angular/core';
import {
  WelcomePresentationUIComponent
} from "../../uiComponent/welcome-presentation-ui/welcome-presentation-ui.component";
import {AdminComponentModule} from "../../component/admin-component.module";
import {
  WelcomePresentationSkeletonComponent
} from "../../skeletonComponent/welcome-presentation-skeleton/welcome-presentation-skeleton.component";

@Component({
  standalone: true,
  selector: 'app-welcome-presentation-creation',
  templateUrl: './welcome-presentation-creation.component.html',
  styleUrls: ['./welcome-presentation-creation.component.scss'],
  imports: [
    WelcomePresentationUIComponent,
    AdminComponentModule,
    WelcomePresentationSkeletonComponent
  ]
})
export class WelcomePresentationCreationComponent implements OnInit {

  loaded = true;

  constructor() {
    setTimeout(()=>{
      this.loaded = false
    },5000)
  }

  ngOnInit() {}

}
