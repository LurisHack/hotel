import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable()

export class StorageService {

  createdStorage: any

  constructor(private storage: Storage) {
    this.storage.create().then((storage:any) => {
      this.createdStorage = storage
    })
      .catch(c => console.log('Storage error ', c))
  }

  setStorage(){
    this.createdStorage.set('testing', 'testing')
  }

}
