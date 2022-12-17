import { Injectable } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Injectable()
export class AlertService {

  constructor(private alertController: AlertController) { }

     alert() {

    return new Promise(async resolve => {

       const alertCtrl = await  this.alertController.create({
        header: 'Please enter your info',
        cssClass: 'custom-alert',
        buttons: ['OK'],
        inputs: [
          {
            placeholder: 'Enter Building Name',
            attributes: {
              maxlength: 50,
            },
          }
        ],
      });

       const  a = alertCtrl.onDidDismiss()

      resolve(a)
      console.log(a)

    await alertCtrl.present()


    })


  }


}
