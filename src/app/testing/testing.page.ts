import {Component} from '@angular/core';
import {SiteInformationService} from "../utility/service/siteInformation.service";
import {ModalController} from "@ionic/angular";
import {TestingComponent} from "../testingComponent/testing/testing.component";
import {TestingPopUpComponent} from "../testing-pop-up/testing-pop-up.component";
import {TestingModel} from "../utility/model/testing-model";
// @ts-ignore
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

  // 'Code', 'Name', 'Count', 'Price', 'Total', 'Action'


  formData =  ['Code', 'Name', 'Count', 'Price']

  dataList = {
    header:
      {name: ['Code', 'Name', 'Count', 'Price', 'Total', 'Action'],
        background: '#869960',
        color: '#fff',
        fontFamily: 'Tahoma, sans-serif',
        textShadow: '1px 1px 0 rgba(0, 0, 0, 0.4)',
        fontWeight: 'bold',
        padding: '5px'
      },
    data: [{
      Action: 'Del',
      Capital: 2000,
      Code: '001',
      Count: 45,
      Name: 'Test name',
      Price: 3000,
      Total : 0
    }]

  }






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

  getData($event: any) {
    console.log('This is testing page ', $event)
    this.dataList.data.push($event)
  }
}

