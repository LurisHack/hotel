import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { hostName } from "../function/hostName";

@Injectable()
export class FirestoreService {

  dbPrefix: any;

  constructor(private angularFirestore: AngularFirestore) {
    this.dbPrefix = angularFirestore.collection(hostName)
}

  getDoc(param: {doc: string}){

    console.log(this.dbPrefix)

    this.dbPrefix.doc(param.doc)
      .get()
      .subscribe((document: any) => {
        console.log(document)
      })

  }


  addDoc(param: {doc: string; data: any}){
      return   this.dbPrefix.doc(param.doc)
        .set(param.data)



  }

}
