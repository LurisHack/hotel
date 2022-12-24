import { Component } from '@angular/core';
import {SiteInformationService} from "../utility/service/siteInformation.service";


@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage{

     loaded = true

  constructor(private siteInformationService: SiteInformationService) {
     console.log(siteInformationService.siteInformation)
  }



}
