import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-roof-top-bar-creation',
  templateUrl: './roof-top-bar-creation.component.html',
  styleUrls: ['./roof-top-bar-creation.component.scss'],
})
export class RoofTopBarCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
