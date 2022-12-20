import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../admin-component.module";
import {StoreSkeletonComponent} from "../../skeletonComponent/store-skeleton/store-skeleton.component";

@Component({
  standalone: true,
  imports: [AdminComponentModule, StoreSkeletonComponent],
  selector: 'app-store',
  templateUrl: './store.component.html',
  sty
