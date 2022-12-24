import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  standalone: true,
  selector: 'app-roof-top-bar-popup-component',
  templateUrl: './roof-top-bar-popup-component.component.html',
  styleUrls: ['./roof-top-bar-popup-component.component.scss'],
  imports: [
    IonicModule
  ]
})

export class RoofTopBarPopupComponentComponent implements OnInit {

  props: any;
  canDismiss: any;

  constructor() { }

  ngOnInit() {}

  onTermsChanged($event: any) {

  }
}
