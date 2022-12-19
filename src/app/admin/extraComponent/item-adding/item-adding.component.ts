import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-item-adding',
  templateUrl: './item-adding.component.html',
  styleUrls: ['./item-adding.component.scss'],
})
export class ItemAddingComponent implements OnInit {

  ngOnInit() {}

}
