import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  siteInformation: { buildingName: string[] } = {buildingName: []}

  constructor(private store: Store<{siteInformation: {siteInformation: any}}>) {
    this.store.select("siteInformation")
      .subscribe(s =>  console.log(s))
  }

  storeSiteInformation(){

  }

}
