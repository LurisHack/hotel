import { Component } from '@angular/core';
import {ToastService} from "../utility/service/toast.service";
import {SiteInformationService} from "../utility/service/siteInformation.service";


@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  providers: [ToastService]
})
export class TestingPage{

     loaded = true

  constructor(private siteInformationService: SiteInformationService) {
     console.log(siteInformationService.siteInformation)
  }



}
