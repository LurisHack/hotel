import { Component } from '@angular/core';
import {SiteInformationService} from "../utility/service/siteInformation.service";
import {ModalController} from "@ionic/angular";
import {TestingComponent} from "../testingComponent/testing/testing.component";


@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage{

  constructor(private siteInformationService: SiteInformationService,
              private modalCtrl: ModalController) {
     console.log(siteInformationService.siteInformation)
  }


   async addProductPopup() {
       const modalCtrl = await this.modalCtrl.create({
       component: TestingComponent})
       await modalCtrl.present()
  }

}
