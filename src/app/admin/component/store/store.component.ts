import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class STOREComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
