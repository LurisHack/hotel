import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../admin/component/admin-component.module";


@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-testing-component',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  property = [
    {name: 'code'},
    {name: 'name'},
    {name: 'price'},
    {name: 'count'},
  ]

  constructor() { }

  ngOnInit() {}

}
