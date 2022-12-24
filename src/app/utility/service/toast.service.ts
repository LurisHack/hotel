import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";
import {ToastOptions} from "@ionic/core/dist/types/components/toast/toast-interface";

@Injectable({providedIn: "root"})

export class ToastService {

  constructor(private toastController: ToastController) { }

  toast(params: ToastOptions){

    this.toastController.getTop()
      .then( toast => {
        const toastShow = async () => {
          const toastCtrl = await this.toastController.create(
            params
          )
          await toastCtrl.present()
        }


        if (toast){
          this.toastController.dismiss().then(t => toastShow())
          return
        }
        toastShow().then();

      })

  }

}
