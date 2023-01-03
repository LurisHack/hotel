import { Component, OnInit } from '@angular/core';
import {AdminComponentModule} from "../../component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";

@Component({
  standalone: true,
  selector: 'app-pos-creation-popup',
  templateUrl: './pos-creation-popup.component.html',
  styleUrls: ['./pos-creation-popup.component.scss'],
  imports: [
    AdminComponentModule,
    ReactiveFormsModule,
  ]
})
export class PosCreationPopupComponent implements OnInit {

  formGroup: any;

  posItem = [
    {name: 'Code', formControlName: 'Code', type: 'text'},
    {name: 'Name', formControlName: 'Name', type: 'text'},
    {name: 'Price', formControlName: 'Price', type: 'number'},
  ]

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      Code: new FormControl(null,Validators.required),
      Name: new FormControl(null, Validators.required),
      Price: new FormControl(null, Validators.required),
      Count: new FormControl(null, Validators.required),
      Capital: new FormControl(null, Validators.required),
    })
  }

}
