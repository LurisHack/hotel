import { Component } from '@angular/core';
import {SiteInformationService} from "../utility/service/siteInformation.service";
import {ModalController} from "@ionic/angular";
import {TestingComponent} from "../testingComponent/testing/testing.component";

type productLitType = {
  Code: string,
  Name: string,
  Price: number,
  Count: number
}[]


@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage{

  productList: productLitType[] = []


  loaded = true

  constructor(private siteInformationService: SiteInformationService,
              private modalCtrl: ModalController) {
     console.log(siteInformationService.siteInformation)
  }

    async testingPopUp(){

       const modalCtrl = await this.modalCtrl.create({
         component: TestingComponent
       })


      modalCtrl.onDidDismiss()
       .then((data: any) => {

         this.productList.push(data.data)

        this.productList = this.productList.map(m => m)
         console.log(this.productList)

       }).catch(c => console.log(c))



      await modalCtrl.present()


}

}
