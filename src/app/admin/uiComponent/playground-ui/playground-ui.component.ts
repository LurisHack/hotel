import {Component, Input, OnInit} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {ModalController} from "@ionic/angular";
import {PlaygroundPopupComponent} from "../../popupComponent/playground-popup/playground-popup.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-playground-ui',
  templateUrl: './playground-ui.component.html',
  styleUrls: ['./playground-ui.component.scss'],
})
export class PlaygroundUIComponent implements OnInit {

  @Input() playGroundData: any

  constructor(private ModalCtrl: ModalController) {
  }

  ngOnInit() {}

  async playgroundPopup(){

    const ModalCtrl = await this.ModalCtrl.create({
      component: PlaygroundPopupComponent,
      cssClass: 'playground-popup-modal'
    })
    await ModalCtrl.present(

    )
  }

}
