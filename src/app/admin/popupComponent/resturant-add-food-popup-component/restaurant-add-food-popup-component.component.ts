import {Component, OnInit} from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {Storage} from "@ionic/storage-angular";
import {RestaurantEnum} from "../../../utility/enum/restaurant-enum";
import {getStorage} from "@angular/fire/storage";


type addPropertyType = {
  Code: string,
  Name: string,
  Price: number,
}

@Component({
  standalone: true,
  selector: 'app-restaurant-add-food-popup-component',
  templateUrl: './restaurant-add-food-popup-component.component.html',
  styleUrls: ['./restaurant-add-food-popup-component.component.scss'],
  imports: [
    AdminComponentModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [Storage]
})
export class RestaurantAddFoodPopupComponentComponent implements OnInit {

  formGroup: any;
  propertyList: addPropertyType[] = []
  label = false;
  number = 1

  foodItem = [
    {name: 'Code', formControlName: 'Code', type: 'text'},
    {name: 'Name', formControlName: 'Name', type: 'text'},
    {name: 'Price', formControlName: 'Price', type: 'number'},
  ]

  constructor(public ModalCtrl: ModalController,private storage: Storage) {
  }

  ngOnInit() {

    this.formGroup = new FormGroup({
      Code: new FormControl(null, Validators.required),
      Name: new FormControl(null, Validators.required),
      Price: new FormControl(null, Validators.required),
    })

  }

   addFood() {
    // this.ModalCtrl.dismiss(this.formGroup.value).then()

  }
  foodList() {
    // this.propertyList.push(this.formGroup.value)
    // this.propertyList = this.propertyList.map(m => m)
    this.label = true;

    const addPropertyListData = () => {
      this.propertyList.push(this.formGroup.value),
      this.formGroup.reset()
    }
    this.storage.create().then(storage => {
      let tempAry: any = []

      storage.get(RestaurantEnum.RESTAURANT_STORAGE).then(getStorage => {
        console.log('storage value', getStorage)

        if (!getStorage) {
          tempAry.push(this.formGroup.value)
          storage.set(RestaurantEnum.RESTAURANT_STORAGE, tempAry).then(t => {
            {
              console.log('Successfully')
              addPropertyListData()
            }
          })
        }else {
          storage.set(RestaurantEnum.RESTAURANT_STORAGE, [...getStorage, this.formGroup.value]).then(t => {
            console.log('Successfully')
            addPropertyListData()
          })
        }
      })
    })
  }
}
