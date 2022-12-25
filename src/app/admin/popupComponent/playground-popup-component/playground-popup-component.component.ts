import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-playground-popup',
  templateUrl: './playground-popup-component.html',
  styleUrls: ['./playground-popup-component.scss'],
})
export class PlayGroundPopup implements OnInit {
  props: any;

  constructor() { }

  ngOnInit() {}

}
