import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  selector: 'app-store-add-product',
  templateUrl: './store-add-product.component.html',
  styleUrls: ['./store-add-product.component.scss'],
  imports: [
    AdminComponentModule
  ]
})
export class StoreAddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
