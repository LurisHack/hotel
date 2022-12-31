import {Component, Input, OnInit} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  imports:[AdminComponentModule, RouterLink],
  selector: 'app-navigation-detail-card',
  templateUrl: './navigation-detail-card.component.html',
  styleUrls: ['./navigation-detail-card.component.scss'],
})
export class NavigationDetailCardComponent implements OnInit {

  @Input() navigationDetailData: any;
  constructor() { }

  ngOnInit() {}

}
