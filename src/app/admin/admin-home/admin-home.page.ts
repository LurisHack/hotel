import { Component } from '@angular/core';
import {AuthService} from "../../user/component/auth/auth.service";
import {RouterService} from "../../utility/service/router.service";
import {ToastService} from "../../utility/service/toast.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
  providers: [RouterService]
})
export class AdminHomePage{

  public appPages = [
    {title: 'ROOM', icon: 'bed'},
    {title: 'POS',  icon: 'print'},
    {title: 'ROOFTOPBAR', icon: 'business'},
    {title: 'PLAYGROUND', icon: 'golf'},
    {title: 'RESTAURANT', icon: 'fast-food'},
    {title: 'INVENTORY', icon: 'reader'},
    {title: 'LOG',  icon: 'library'},
    {title: 'SETTING',  icon: 'settings'},
  ];


  public additionalFeatures = [
    {title: 'USERS', icon: 'person'},
    {title: 'PAYROLL', icon: 'cash'},
    {title:'PERMISSIONS', icon: 'shield-checkmark'},
     ]


  showSplit = false;
  private to: any;
  Golden72: any;


  constructor(private authService: AuthService,
              private routeService: RouterService,
              private toastService: ToastService,
              public activatedRoute: ActivatedRoute) {}

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
    console.log('split pane event ', $event)

    // let splitPaneState = 'SplitPaneHide'
    //
    // if ($event.detail.visible){
    //   splitPaneState = 'SplitPaneShow'
    // }
    //
    // this.routeService.setFragment({link: 'admin-home', fragment:  splitPaneState}).then()

   }

}
