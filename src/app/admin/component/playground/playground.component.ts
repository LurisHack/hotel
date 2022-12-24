import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {ModalController} from "@ionic/angular";
import {
  PlayGroundCreationComponent
} from "../../creationComponent/play-ground-creation/play-ground-creation.component";

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

  async PlayGroundCreation(i: number){

    console.log(i)

    const modalCtrl = await this.modalCtrl.create({
      component: PlayGroundCreationComponent ,
      componentProps: {props: i}
    })


    await modalCtrl.present()

  }



}
