import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-skeleton',
  templateUrl: './store-skeleton.component.html',
  styleUrls: ['./store-skeleton.component.scss'],
})
export class StoreSkeletonComponent implements OnInit {
    storeSkeleton: any;

  constructor() { }

  ngOnInit() {}

}
