import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {ItemAddingComponent} from "../../extraComponent/item-adding/item-adding.component";
import {NgIf} from "@angular/common";
import {
  RoofTopBarCreationComponent
} from "../../creationComponent/roof-top-bar-creation/roof-top-bar-creation.component";
import {RooftopbarComponent} from "../../component/rooftopbar/rooftopbar.component";

@Component({
  standalone: true,
  selector: 'app-roof-top-bar-popup-component',
  templateUrl: './roof-top-bar-popup-component.component.html',
  styleUrls: ['./roof-top-bar-popup-component.component.scss'],
  imports: [
    IonicModule,
    ItemAddingComponent,
    NgIf,
    RoofTopBarCreationComponent,
    RooftopbarComponent
  ]
})
export class RoofTopBarPopupComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }



}
