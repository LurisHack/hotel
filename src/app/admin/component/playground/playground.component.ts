import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {ModalController} from "@ionic/angular";

@Component({
  standalone:true,
  imports:[AdminComponentModule],
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async PlayGroundPopup(){

    console.log()

    const modalCtrl = await this.modalCtrl.create({
      component: PlaygroundComponent}
    )


    await modalCtrl.present()

  }



}
