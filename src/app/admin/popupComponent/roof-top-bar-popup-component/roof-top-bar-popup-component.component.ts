import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf} from "@angular/common";
import {MultiListModel} from "../../../utility/model/multi-list.model";
import {AdminComponentModule} from "../../component/admin-component.module";
import {MultiFormComponent} from "../../../utility/component/multi-form/multi-form.component";
import {MultiListUiComponent} from "../../../utility/component/multi-list-ui/multi-list-ui.component";

@Component({
  standalone: true,
  selector: 'app-roof-top-bar-popup-component',
  templateUrl: './roof-top-bar-popup-component.component.html',
  styleUrls: ['./roof-top-bar-popup-component.component.scss'],
    imports: [
        IonicModule,
        NgForOf,
        AdminComponentModule,
        MultiFormComponent,
        MultiListUiComponent,
    ]
})

export class RoofTopBarPopupComponentComponent implements OnInit, MultiListModel {

  props: any;
  canDismiss: any;
  constructor() {
  }

  // fromData: string[] = []

  searchFormData = [{
    name: 'Code',
    sizeXs: '12',
    sizeSm: '6',
    sizeMd: '4',
    sizeLg: '4',
    sizeXl: '12',
  }]

  dataList: {
    header: {
      name: string[];
      background: string;
      color: string;
      fontFamily: string;
      textShadow: string;
      fontWeight: string;
      padding: string };
    data: any[]
  } =
    {
      header:
        {name: ['Code', 'Name', 'Capital', 'Count', 'Price', 'Total', 'Action'],
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
  ngOnInit() {
  }
}
