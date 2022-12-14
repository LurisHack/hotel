import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class INVENTORYComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
