import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";


@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-inventory-ui',
  templateUrl: './inventory-ui.component.html',
  styleUrls: ['./inventory-ui.component.scss'],
})
export class InventoryUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
