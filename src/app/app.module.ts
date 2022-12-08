import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {UserHomeComponent} from "./user/component/user-home/user-home.component";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {BrowserModule} from "@angular/platform-browser";
import {RouteReuseStrategy} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {reducers} from "./app.reducer";

@NgModule({
declarations: [AppComponent],
  imports: [IonicModule.forRoot(), BrowserModule, UserHomeComponent,
    AppRoutingModule, StoreModule.forRoot(reducers),
    BrowserAnimationsModule],
  bootstrap: [AppComponent],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}]
})

export class AppModule{}
