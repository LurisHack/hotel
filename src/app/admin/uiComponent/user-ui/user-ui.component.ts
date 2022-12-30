import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {NgForOf, NgIf} from "@angular/common";
import {AdminComponentModule} from "../../component/admin-component.module";
import {UserDetailPopupComponent} from "../../popupComponent/user-detail-popup/user-detail-popup.component";

@Component({
  standalone: true,
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss'],
  imports: [
    AdminComponentModule,
  ]
})
export class UserUIComponent implements OnInit {

  loaded = true
  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {}


  async userDetail() {

    const ModalCtrl = await this.ModalCtrl.create({
      component: UserDetailPopupComponent,
    })
    await ModalCtrl.present()
  }
}
