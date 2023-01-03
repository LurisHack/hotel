import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {MultiFormComponent} from "../../../utility/component/multi-form/multi-form.component";
import {MultiListUiComponent} from "../../uiComponent/multi-list-ui/multi-list-ui.component";
import {MultiListModel} from "../../../utility/model/multi-list.model";
import {IonSplitPane} from "@ionic/angular";

@Component({
  standalone: true,
  imports: [
    AdminComponentModule, MultiFormComponent, MultiListUiComponent
  ],
  selector: 'app-pos-creation',
  templateUrl: './pos-creation.component.html',
  styleUrls: ['./pos-creation.component.scss'],

})
export class PosCreationComponent implements OnInit,  MultiListModel {


   splitPaneState = false;

  constructor(private ionSplitPane: IonSplitPane) {

    ionSplitPane.ionSplitPaneVisible.subscribe(s => {
      console.log(s.detail.visible)
      this.splitPaneState = s.detail.visible
    })

  }

  searchState = 'Code'

  formData: string[] = []
  searchFormData = [{
    name: 'Code',
    sizeXs: '12',
  }]

  addFormData = [
    {
    name: 'Code',
    sizeXs: '4',
      sizeMd: '4',
      sizeLg: '12'
   },
    {
      name: 'Name',
      sizeXs: '8',
      sizeMd: '8',
      sizeLg: '12'
    },
    {
    name: 'Count',
      sizeXs: '4',
      sizeMd: '4',
      sizeLg: '12'

    },

    {
      name: 'Capital',
      sizeXs: '4',
      sizeMd: '4',
      sizeLg: '12'

    },
    {
      name: 'Price',
      sizeXs: '4',
      sizeMd: '4',
      sizeLg: '12'

    },



    ]
  segmentData = 'Add'


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



  // data: any[] = [];
  // header:
  //   { name: string[]; background: string; color: string; fontFamily: string; textShadow: string; fontWeight: string; padding: string } =
  //   {
  //     name: ['Code', 'Name', 'Capital', 'Count', 'Price', 'Total', 'Action'],
  //     background: '#869960',
  //     color: '#fff',
  //     fontFamily: 'Tahoma, sans-serif',
  //     textShadow: '1px 1px 0 rgba(0, 0, 0, 0.4)',
  //     fontWeight: 'bold',
  //     padding: '5px'
  //   }


  ngOnInit() {

   }

  segmentEventValue($event: any){
    this.segmentData = $event.detail.value
  }


  formOutput($event: any) {
    console.log($event)
    this.dataList.data.push($event)

    this.dataList.data = this.dataList.data.map(m => m)

  }

  searchStateChange(){
   this.searchState = this.searchState === 'Code' ? 'Name' : 'Code'
  }
}
