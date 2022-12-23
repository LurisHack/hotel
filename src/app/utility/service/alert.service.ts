import { Injectable } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Injectable({providedIn: "root"})
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

       alertCtrl.onDidDismiss()
         .then(data => resolve(data.data.values))


    await alertCtrl.present()


    })


  }


}
