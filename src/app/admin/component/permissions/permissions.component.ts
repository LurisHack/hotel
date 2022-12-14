import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PERMISSIONSComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
