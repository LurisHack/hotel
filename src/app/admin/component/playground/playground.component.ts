import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {ModalController} from "@ionic/angular";
import {PlaygroundUIComponent} from "../../uiComponent/playground-ui/playground-ui.component";

@Component({
  standalone:true,
  imports:[AdminComponentModule, PlaygroundUIComponent],
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }


  playGroundUrl = [
    {name: 'GYM', link: 'https://www.mirabellointeriors.com/wp-content/uploads/2019/11/home-gym-design.jpg'},
    {name: 'Tennis', link: 'https://photoresources.wtatennis.com/photo-resources/2019/08/15/dbb59626-9254-4426-915e-57397b6d6635/tennis-origins-e1444901660593.jpg?width=1200&height=630'},
    {name: 'Bicycle Ride', link: 'https://cdn.mos.cms.futurecdn.net/kqLSRDQAELv2uFvoVFEi68.jpg'},
    {name: 'Swimming Pool', link: 'https://img.staticmb.com/mbcontent//images/uploads/2021/8/swimming-pool-vastu.jpg'}
  ]

  ngOnInit() {}

  async PlayGroundPopup(){

    console.log()

    const modalCtrl = await this.modalCtrl.create({
      component: PlaygroundComponent}
    )


    await modalCtrl.present()

  }


  addBuildingName() {

  }
}
