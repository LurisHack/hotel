import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ScrollingModule} from "@angular/cdk/scrolling";

@Component({
  standalone: true,
  imports: [IonicModule, ScrollingModule],
  selector: 'app-room-ui',
  templateUrl: './room-ui.component.html',
  styleUrls: ['./room-ui.component.scss'],
})
export class RoomUIComponent{}
