import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss'],
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class UserUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
