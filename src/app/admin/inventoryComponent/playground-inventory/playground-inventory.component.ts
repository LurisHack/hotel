import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-playground-inventory',
  templateUrl: './playground-inventory.component.html',
  styleUrls: ['./playground-inventory.component.scss'],
})
export class PlaygroundInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
