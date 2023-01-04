import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdminComponentModule} from "../../../admin/component/admin-component.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  standalone: true,
  imports: [AdminComponentModule, ReactiveFormsModule],
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.scss'],
})
export class MultiFormComponent implements OnInit {

  formGroup: FormGroup | undefined;

  @Input() formData: {
    name: string, sizeXs?: string, sizeSm?: string, sizeMd?: string, sizeLg?: string, sizeXl?: string,}[] | undefined;
  @Output() formOutput = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

    console.log(this.formData)
    this.formGroup = new FormGroup({})
    console.log('form data ', this.formData)
    if (this.formData) {
      for (let formData of this.formData) {
        this.formGroup.addControl(formData.name, new FormControl(null, Validators.required))
      }
    }
  }

  submitData() {
    if (this.formGroup) {
      console.log(this.formGroup.value)

      Object.assign(this.formGroup.value, {Total: this.formGroup.value.Price * this.formGroup.value.Count})

      this.formOutput.emit(this.formGroup.value)
    }
  }

}
