import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {SiteInformation} from "../enum/site-information";
import {SITE_INFORMATION} from "../store/siteInformation/siteInformation.action";
import {FirestoreService} from "./firestore.service";
import {Subscription} from "rxjs";
import {generateId} from "../function/generateId";
import {AlertService} from "./alert.service";

@Injectable({providedIn: "root"})

export class SiteInformationService {

  storeSubscription: Subscription;
  siteInformation: {
    buildingName: { name: string, id: string }[],
    roomName: {name: string, id: string}[]
  } = {
    buildingName: [],
    roomName: []
  }

  constructor(private store: Store<{ siteInformation: { siteInformation: any }}>,
              private firestoreService: FirestoreService,
              private alertService: AlertService,
  ) {


    this.storeSubscription = this.store.select('siteInformation').subscribe((siteInformation:any) => {
      console.log(siteInformation)
      this.siteInformation = siteInformation
    })

  }

  addBuildingName() {
    this.alertService.alert()
      .then((alert: any) => {
        console.log(alert)
        Object.assign(this.siteInformation,
          {buildingName: [...this.siteInformation.buildingName, {name: alert[0], id: generateId()}]})
        console.log(this.siteInformation)
        this.firestoreService.addDoc({doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation})
          .then((t: any) => {
            console.log(t)
            this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
          })
          .catch((c: any) => console.log(c))
      })
  }

  deleteSiteInformation(id: string) {
    Object.assign(this.siteInformation,
      {buildingName: this.siteInformation.buildingName.filter(buildingName => buildingName.id != id)})
    this.updateSiteInformationData()
  }

  editBuildingName(id:string) {
    this.alertService.alert()
      .then((inputData: any) => {
        if (inputData[0]){
          Object.assign(this.siteInformation,
            {buildingName: this.siteInformation.buildingName
                .map(buildingName => buildingName.id === id ? {...buildingName, name: inputData[0]} : buildingName)})
          this.updateSiteInformationData()
        }
      })
  }

  private updateSiteInformationData() {
    this.firestoreService.updateDoc({doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation})
      .then((t: any) => {
        console.log(t)
        this.store.dispatch(
          {type: SITE_INFORMATION, payload: this.siteInformation})
      }).catch((c: any) => console.log(c))
  }

  addRoomName(id: string) {
    this.alertService.alert()
      .then((alert: any) => {
        console.log(alert)
        Object.assign(this.siteInformation,
          {roomName: [...this.siteInformation.roomName, {name: alert[0], id: id}]})
        console.log(this.siteInformation)
        this.firestoreService.addDoc({doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation})
          .then((t: any) => {
            console.log(t)
            this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
          })
          .catch((c: any) => console.log(c))
      })
  }

}
