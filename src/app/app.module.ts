import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "./user/component/welcome/welcome.component";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {BrowserModule} from "@angular/platform-browser";
import {RouteReuseStrategy} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {reducers} from "./app.reducer";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";


@NgModule({
declarations: [AppComponent],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    WelcomeComponent,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule],
  bootstrap: [AppComponent],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}]
})

export class AppModule{}
