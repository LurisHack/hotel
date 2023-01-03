import {Component, Input, OnInit} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {MultiListModel} from "../../../utility/model/multi-list.model";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-multi-list-ui',
  templateUrl: './multi-list-ui.component.html',
  styleUrls: ['./multi-list-ui.component.scss'],
})
export class MultiListUiComponent implements OnInit {


  @Input() listData: any;
  @Input() getWidth: number = 0;

  constructor() { }

  ngOnInit() {}

}
