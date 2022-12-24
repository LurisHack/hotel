import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {SiteInformation} from "../enum/site-information";
import {SITE_INFORMATION} from "../store/siteInformation/siteInformation.action";
import {FirestoreService} from "./firestore.service";
import {Subscription} from "rxjs";
import {generateId} from "../function/generateId";
import {AlertService} from "./alert.service";
import {ToastService} from "./toast.service";

@Injectable({providedIn: "root"})

export class SiteInformationService {

  storeSubscription: Subscription;
  siteInformation: {
    buildingName: { name: string, id: string }[],
    roomName: { name: string, id: string }[],
    roomType: { name: string, id: string }[],
    roomTypePackage: { roomTypeId: string, price: number | string, hour: number, packageType: string }[]
  } = {
    buildingName: [],
    roomName: [],
    roomType: [],
    roomTypePackage: []
  }

  constructor(private store: Store<{ siteInformation: { siteInformation: any } }>,
              private firestoreService: FirestoreService,
              private alertService: AlertService,private toastService: ToastService
  ) {
    this.storeSubscription = this.store.select('siteInformation').subscribe((siteInformation: any) => {
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

  editBuildingName(id: string) {
    this.alertService.alert()
      .then((inputData: any) => {
        if (inputData[0]) {
          Object.assign(this.siteInformation,
            {
              buildingName: this.siteInformation.buildingName
                .map(buildingName => buildingName.id === id ? {...buildingName, name: inputData[0]} : buildingName)
            })
          this.updateSiteInformationData()
        }
      })
  }

  private updateSiteInformationData() {
    // this.firestoreService.updateDoc({doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation})
    //   .then((t: any) => {
    //     console.log(t)
    //     this.store.dispatch(
    //       {type: SITE_INFORMATION, payload: this.siteInformation})
    //   }).catch((c: any) => console.log(c))
  }

  addRoomName(name: string | number, id: string, roomType: string) {
    // this.alertService.alert()
    //   .then((alert: any) => {
    //     console.log(alert)

    if (!name || !id){
      this.toastService.toast({message: 'Invalid name or id!'})
      return
    }

        Object.assign(this.siteInformation,
          {roomName: [...this.siteInformation.roomName, {name, id, roomType}]})
        console.log(this.siteInformation)
        this.firestoreService.addDoc({doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation})
          .then((t: any) => {
            console.log(t)
            this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
          })
          .catch((c: any) => console.log(c))
      // })
  }

  addRoomType(name: string | number, id: string, updatePropertyName: any) {

    Object.assign(this.siteInformation,
      {roomType: [...this.siteInformation.roomType, {name, id}]})
    console.log(this.siteInformation)
    this.firestoreService.updateDoc({
      doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation.roomType,
      updatePropertyName
    })
      .then((t: any) => {
        console.log(t)
        this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((c: any) => console.log(c))

  }


  deleteRoomType(roomTypeId: string, updatePropertyName: any) {

    Object.assign(this.siteInformation,
      {roomType: this.siteInformation.roomType.filter(roomType => roomType.id != roomTypeId)})
    this.firestoreService.updateDoc({
      doc: SiteInformation.SITE_INFORMATION, data: this.siteInformation.roomType,
      updatePropertyName
    })
      .then((t: any) => {
        console.log(t)
        this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((c: any) => console.log(c))

  }

  addRoomPackage(roomTypeId: any, hour: number, price: number | string, packageType: any) {

    // Object.assign(this.siteInformation, {
    //   roomTypePackage: this.siteInformation.roomType.map(roomType => roomType.id === packageId ? {...roomType, hour, price} : roomType)
    // })

    this.siteInformation.roomTypePackage.push({roomTypeId, hour, price, packageType})
    this.firestoreService.updateDoc({doc: SiteInformation.SITE_INFORMATION,
      data: this.siteInformation.roomTypePackage,
      updatePropertyName: 'roomTypePackage'})
      .then((success: any) => {
        console.log('room type package adding success')
        this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((error: any) => console.log(error))

  }
}
