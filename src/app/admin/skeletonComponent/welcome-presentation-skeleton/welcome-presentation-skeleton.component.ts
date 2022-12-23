import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-welcome-presentation-creation-skeleton',
  templateUrl: './welcome-presentation-skeleton.component.html',
  styleUrls: ['./welcome-presentation-skeleton.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class WelcomePresentationSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
