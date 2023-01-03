import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {ModalController} from "@ionic/angular";
import {
  RoofTopBarPopupComponentComponent
} from "../../popupComponent/roof-top-bar-popup-component/roof-top-bar-popup-component.component";

@Component({
  standalone: true,
  imports:[AdminComponentModule, RoofTopBarPopupComponentComponent],
  selector: 'app-rooftopbar',
  templateUrl: './rooftopbar.component.html',
  styleUrls: ['./rooftopbar.component.scss'],
})
export class RooftopbarComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async roofTopBarPopUp(i: number){

    console.log(i)

    const modalCtrl = await this.modalCtrl.create({
      component: RoofTopBarPopupComponentComponent,
      cssClass: 'roof-top-bar-popup-modal',
    })
   await modalCtrl.present()
  }

}
