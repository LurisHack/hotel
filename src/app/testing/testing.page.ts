import {Component} from '@angular/core';
import {SiteInformationService} from "../utility/service/siteInformation.service";
import {ModalController} from "@ionic/angular";
import {TestingComponent} from "../testingComponent/testing/testing.component";
import {TestingPopUpComponent} from "../testing-pop-up/testing-pop-up.component";
import {TestingModel} from "../utility/model/testing-model";
import {Storage} from "@ionic/storage-angular"
import {TestingEnum} from "../utility/enum/testing-enum";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  providers: [Storage]
})
export class TestingPage {

  productList: TestingModel[] = []


  loaded = true

  constructor(private siteInformationService: SiteInformationService,
              private modalCtrl: ModalController, private storage: Storage) {
    console.log(siteInformationService.siteInformation)

    this.getProductListData()

  }


  async testingPopUp() {

    const modalCtrl = await this.modalCtrl.create({
      component: TestingComponent,
      cssClass: 'testing-modal',

    })


    modalCtrl.onDidDismiss()
      .then((data: any) => {

        // this.productList.push(data.data)
        //
        // this.productList = this.productList.map(m => m)
        // console.log(this.productList)

        this.getProductListData()


      }).catch(c => console.log(c))


    await modalCtrl.present()

  }

  async editProduct(product: any) {
    console.log(product)

    const editModal = await this.modalCtrl.create({
      component: TestingPopUpComponent,
      componentProps: {product: product}
    })

    editModal.onDidDismiss().then((value: any) => {

      this.getProductListData()

    })

    await editModal.present()

  }


  getProductListData() {

    this.storage.create().then((storage: any) => {

      storage.get(TestingEnum.TESTING_STORAGE)
        .then((storageData: TestingModel[]) => {

          console.log(storageData)

          this.productList = storageData

        })
    })

  }

}

