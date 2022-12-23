import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-welcome-presentation-creation-ui',
  templateUrl: './welcome-presentation-ui.component.html',
  styleUrls: ['./welcome-presentation-ui.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class WelcomePresentationUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
