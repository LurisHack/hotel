import { Component, OnInit } from '@angular/core';
import {RouterService} from "../../../utility/service/router.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [RouterService]

})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
