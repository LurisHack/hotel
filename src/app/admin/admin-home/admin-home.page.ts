import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../user/component/auth/auth.service";
import {RouterService} from "../../utility/service/router.service";
import {ToastService} from "../../utility/service/toast.service";
import {IonRouterOutlet} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
  providers: [RouterService, ToastService]
})
export class AdminHomePage{

  public appPages = [
    {title: 'ROOM', icon: 'bed'},
    {title: 'POS',  icon: 'print'},
    {title: 'STORE', icon: 'storefront'},
    {title: 'RESTAURANT', icon: 'fast-food'},
    {title: 'INVENTORY', icon: 'reader'},
    {title: 'LOG',  icon: 'library'},
    {title: 'SETTING',  icon: 'settings'},
  ];


  public additionalFeatures = [
    {title: 'USERS', icon: 'person'},
    {title:'PERMISSIONS', icon: 'shield-checkmark'},
     ]

  constructor(private authService: AuthService,
              private routeService: RouterService,
              private toastService: ToastService) {}

  signOut() {
    this.authService.signOut()
      .then(() => this.routeService.setRoute({link: '/welcome'})
        .catch((error) => this.toastService.toast({
          message: error.message,
          duration: 2000
        }) ))
      .catch((error) => {
        this.toastService.toast({
          message: error.message,
          duration: 2000
        })
      })
  }


  ionSplitPaneVisible($event: any) {
    console.log($event)
  }
}
