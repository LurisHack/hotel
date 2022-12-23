import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { hostName } from "../function/hostName";
import {map} from "rxjs";
import {docResolver} from "../function/documentResolver";
import {updatePassword} from "@angular/fire/auth";

@Injectable({providedIn: "root"})
export class FirestoreService {

  dbPrefix: any;

  constructor(private angularFirestore: AngularFirestore) {
    this.dbPrefix = angularFirestore.collection(hostName)
}

  getDoc(param: {doc: string}){
    console.log(this.dbPrefix)
  return   this.dbPrefix.doc(param.doc)
      .get()
      .pipe(map(docData => docResolver(docData)))

  }


  addDoc(param: {doc: string; data: any}){

    console.log(param)

      return   this.dbPrefix.doc(param.doc)
        .set(param.data)
  }

  updateDoc(param: {doc: string; data: any; updatePropertyName: any}){

    console.log(param)

    return   this.dbPrefix.doc(param.doc)
      .update({[param.updatePropertyName]: param.data})

  }

}
