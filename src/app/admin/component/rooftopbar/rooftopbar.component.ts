import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-rooftopbar',
  templateUrl: './rooftopbar.component.html',
  styleUrls: ['./rooftopbar.component.scss'],
})
export class RooftopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
