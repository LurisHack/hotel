import { Component } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {RouterModule} from "@angular/router";
import {InventoryUIComponent} from "../../uiComponent/inventory-ui/inventory-ui.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule,InventoryUIComponent,RouterModule],
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class INVENTORYComponent{
}
