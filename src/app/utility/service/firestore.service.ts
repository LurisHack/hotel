import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { hostName } from "../function/hostName";
import {map} from "rxjs";
import {docResolver} from "../function/documentResolver";

@Injectable()
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
      return   this.dbPrefix.doc(param.doc)
        .set(param.data)
  }

  updateDoc(param: {doc: string; data: any}){
    return   this.dbPrefix.doc(param.doc)
      .update(param.data)

  }

}
