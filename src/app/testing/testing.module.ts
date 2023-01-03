import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TestingPageRoutingModule} from './testing-routing.module';

import {TestingPage} from './testing.page';
import {MultiListUiComponent} from "../admin/uiComponent/multi-list-ui/multi-list-ui.component";
import {MultiFormComponent} from "../utility/component/multi-form/multi-form.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingPageRoutingModule,
    MultiListUiComponent,
    MultiFormComponent
  ],

  declarations: [TestingPage]
})
export class TestingPageModule {
}
