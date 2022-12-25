import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {FirestoreService} from "./firestore.service";
import {Subscription} from "rxjs";
import {generateId} from "../function/generateId";
import {AlertService} from "./alert.service";
import {ToastService} from "./toast.service";
import {SiteInformationEnum} from "../enum/site-information-enum";
import {RoomDataModel} from "../model/room-data";

@Injectable({providedIn: "root"})

export class SiteInformationService {

  storeSubscription: Subscription;
  siteInformation: {
    buildingName: { name: string, id: string }[],
    roomData: RoomDataModel[],
    roomType: { name: string, id: string }[],
    roomTypePackage: { roomTypeId: string, price: number | string, hour?: number, packageType: string,
      startHour?: any, endHour?: any }[]
  } | undefined;

  constructor(private store: Store<{ siteInformation: { siteInformation: any } }>,
              private firestoreService: FirestoreService,
              private alertService: AlertService,private toastService: ToastService
  ) {
    this.storeSubscription = this.store.select('siteInformation').subscribe((siteInformation: any) => {
      console.log(siteInformation)
      this.siteInformation = siteInformation
    })
  }

  addBuildingName(name: any) {

     if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }

    Object.assign(this.siteInformation,
          {buildingName: [...this.siteInformation.buildingName, {name, id: generateId()}]})
        console.log(this.siteInformation)
        this.firestoreService.addDoc({doc: SiteInformationEnum.SITE_INFORMATION, data: this.siteInformation})
          .then((t: any) => {
            console.log(t)
           })
          .catch((c: any) => console.log(c))
   }

  deleteSiteInformation(id: string) {
    if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }
    Object.assign(this.siteInformation,
      {buildingName: this.siteInformation.buildingName.filter(buildingName => buildingName.id != id)})
    this.updateSiteInformationData()
  }

  editBuildingName(id: string) {


    this.alertService.alert()
      .then((inputData: any) => {

        if (!this.siteInformation){
          console.log('site information error ', this.siteInformation)
          return
        }

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

  addRoomName(name: string | number, buildingData: any, roomType: string, ) {
    // this.alertService.alert()
    //   .then((alert: any) => {
    //     console.log(alert)

    if (!name || !buildingData || !roomType){
      this.toastService.toast({message: 'Invalid name or id!', duration: 2000})
      return
    }

    if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }

        Object.assign(this.siteInformation,
          {
            roomData: [...this.siteInformation.roomData, {name, id: generateId(),
              buildingData, roomType, roomState: 'Available'}],
            stayData: [{
              stayTimeLength:  {
                roomTypeId: '',
                packageType: '',
                price: 0,
                hour: 0,
                startHour: 0,
                endHour: 0
              }}],
              startTime: null,
              endTime: null,
            usedData: {
              store: [],
              restaurant: [],
              foc: [],
              damage: []
            }})
        console.log(this.siteInformation)
        this.firestoreService.addDoc({doc: SiteInformationEnum.SITE_INFORMATION, data: this.siteInformation})
          .then((t: any) => {
            console.log(t)
            // this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
          })
          .catch((c: any) => console.log(c))
      // })
  }

  addRoomType(name: string | number, id: string, updatePropertyName: any) {


    if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }


    Object.assign(this.siteInformation,
      {roomType: [...this.siteInformation.roomType, {name, id}]})
    console.log(this.siteInformation)
    this.firestoreService.updateDoc({
      doc: SiteInformationEnum.SITE_INFORMATION, data: this.siteInformation.roomType,
      updatePropertyName
    })
      .then((t: any) => {
        console.log(t)
        // this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((c: any) => console.log(c))

  }


  deleteRoomType(roomTypeId: string, updatePropertyName: any) {


    if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }


    Object.assign(this.siteInformation,
      {roomType: this.siteInformation.roomType.filter(roomType => roomType.id != roomTypeId)})
    this.firestoreService.updateDoc({
      doc: SiteInformationEnum.SITE_INFORMATION, data: this.siteInformation.roomType,
      updatePropertyName
    })
      .then((t: any) => {
        console.log(t)
        // this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((c: any) => console.log(c))

  }

  // addRoomPackage(roomTypeId: any, hour: number, price: number | string, packageType: any) {

    // Object.assign(this.siteInformation, {
    //   roomTypePackage: this.siteInformation.roomType.map(roomType => roomType.id === packageId ? {...roomType, hour, price} : roomType)
    // })

    // this.siteInformation.roomTypePackage.push({roomTypeId, hour, price, packageType})
    // this.firestoreService.updateDoc({doc: SiteInformation.SITE_INFORMATION,
    //   data: this.siteInformation.roomTypePackage,
    //   updatePropertyName: 'roomTypePackage'})
    //   .then((success: any) => {
    //     console.log('room type package adding success')
    //     // this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
    //   })
    //   .catch((error: any) => console.log(error))
  // }

  deleteRoomName(id: string) {


    if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }


    this.firestoreService.updateDoc({doc: SiteInformationEnum.SITE_INFORMATION,
      data: this.siteInformation.roomData.filter(roomName => roomName.id !== id),
      updatePropertyName: 'roomName'})
      .then((success: any) => {
        console.log('room type name adding success')
        //this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((error: any) => console.log(error))
  }

  addRoomSectionPackage(roomTypeId: any, hour: any, price: string | number, packageType: string) {


    if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }


    this.siteInformation.roomTypePackage.push({roomTypeId, hour, price, packageType})
    this.firestoreService.updateDoc({doc: SiteInformationEnum.SITE_INFORMATION,
      data: this.siteInformation.roomTypePackage,
      updatePropertyName: 'roomTypePackage'})
      .then((success: any) => {
        console.log('room type package adding success')
        // this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((error: any) => console.log(error))
  }

  addRoomFullTimePackage(roomTypeId: any, startHour: any, endHour: any, price: string | number, packageType: string) {

   console.log(roomTypeId, startHour, endHour, price, packageType)

    if (!this.siteInformation){
      console.log('site information error ', this.siteInformation)
      return
    }

    this.siteInformation.roomTypePackage.push({roomTypeId, startHour, endHour, price, packageType})
    this.firestoreService.updateDoc({doc: SiteInformationEnum.SITE_INFORMATION,
      data: this.siteInformation.roomTypePackage,
      updatePropertyName: 'roomTypePackage'})
      .then((success: any) => {
        console.log('room type package adding success')
        // this.store.dispatch({type: SITE_INFORMATION, payload: this.siteInformation})
      })
      .catch((error: any) => console.log(error))



  }
}
