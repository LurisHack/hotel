import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {InventoryUIComponent} from "../../subComponent/inventory-ui/inventory-ui.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule,InventoryUIComponent,AdminComponentModule],
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class INVENTORYComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
