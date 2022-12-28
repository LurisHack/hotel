import {Component, Input, OnInit} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";

@Component({
  standalone: true,
  imports: [AdminComponentModule],
  selector: 'app-playground-ui',
  templateUrl: './playground-ui.component.html',
  styleUrls: ['./playground-ui.component.scss'],
})
export class PlaygroundUIComponent implements OnInit {

  @Input() playGroundData: any

  constructor() { }



  ngOnInit() {}

}
