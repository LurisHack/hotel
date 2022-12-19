import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-store-skeleton',
  templateUrl: './store-skeleton.component.html',
  styleUrls: ['./store-skeleton.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class StoreSkeletonComponent implements OnInit {


  constructor() { }

  ngOnInit() {}

}
