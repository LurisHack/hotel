import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {SiteInformation} from "../enum/site-information";

@Injectable()

export class FirebaseService {


  // constructor(private angularFireStore: AngularFirestore) { }

  // dbPrefix = this.angularFireStore.collection(location.hostname)

  addDocument(){
    console.log(location.pathname)
  }


  // getDoc(param: {doc: string}){
  //   this.dbPrefix.doc(param.doc)
  //     .get()
  //     .subscribe(data => {
  //       console.log(data)
  //     })
  // }

}
