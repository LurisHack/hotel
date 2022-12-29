import {Component, ViewEncapsulation} from '@angular/core';
import {SiteInformationService} from "../utility/service/siteInformation.service";
import {ModalController} from "@ionic/angular";
import {TestingComponent} from "../testingComponent/testing/testing.component";
import {TestingPopUpComponent} from "../testing-pop-up/testing-pop-up.component";
import {TestingModel} from "../utility/model/testing-model";


@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
 })
export class TestingPage {

    productList: TestingModel[] = []




    loaded = true

    constructor(private siteInformationService: SiteInformationService,
                private modalCtrl: ModalController) {
        console.log(siteInformationService.siteInformation)

      this.generate()
    }

    generate(){
      for(let i = 0; i < 5; i++ ){
        this.productList.push({Code: i + 100, Name: 'Name '+i.toString(), Count: i + 123, Price: 233+i},)
      }
    }

    async testingPopUp() {

        const modalCtrl = await this.modalCtrl.create({
            component: TestingComponent,
          cssClass: 'testing-modal',

        })


        modalCtrl.onDidDismiss()
            .then((data: any) => {

                this.productList.push(data.data)

                this.productList = this.productList.map(m => m)
                console.log(this.productList)

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


       this.productList = this.productList.map((map: any) =>  map.Code === value.data.Code ? value.data : map)


      })

      await editModal.present()

    }

}

