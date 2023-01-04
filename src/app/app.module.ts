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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
    declarations: [AppComponent],
    imports: [
        IonicModule.forRoot(),
        BrowserModule,
        WelcomeComponent,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideStorage(() => getStorage())],
    bootstrap: [AppComponent],
    providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}]
})

export class AppModule{}
