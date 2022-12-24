import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss'],
  imports: [
    IonicModule,
    NgForOf,
    NgIf
  ]
})
export class UserUIComponent implements OnInit {

  loaded = true
  constructor() {
    setTimeout(()=>{
      this.loaded=false
    },5000)
  }

  //TODO to create ngOninit
  ngOnInit() {}

}
