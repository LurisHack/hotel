import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {UserUIComponent} from "../../uiComponent/user-ui/user-ui.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule,UserUIComponent ],
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class USERSComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
