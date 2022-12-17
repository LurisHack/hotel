import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {AlertService} from "../../utility/service/alert.service";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  providers: [AlertService]
})
export class RoomListComponent implements OnInit {

  constructor(private alertService: AlertService) {}

  ngOnInit() {}

  addBuildingName() {

    this.alertService.alert()
      .then( ( alert: any) => {
       console.log(alert)
        console.log(alert.data.values)
      })

  }
}
