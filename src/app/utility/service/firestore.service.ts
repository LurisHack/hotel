import { Injectable } from '@angular/core';

@Injectable()
export class FirestoreService {

  dbPrefix: any;

  // constructor(private angularFirestore: AngularFirestore) {
    // this.dbPrefix = angularFirestore.collection(hostName)
// }

  getDoc(){
    console.log(this.dbPrefix)
  }

}
