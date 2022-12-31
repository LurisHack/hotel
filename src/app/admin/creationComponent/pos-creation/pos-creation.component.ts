import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-pos-creation',
  templateUrl: './pos-creation.component.html',
  styleUrls: ['./pos-creation.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class PosCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
