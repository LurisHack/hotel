import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class RouterService {

  constructor(private router: Router) { }

  setRoute(param: {link: string}){
   return  this.router.navigateByUrl(param.link)
  }

}
