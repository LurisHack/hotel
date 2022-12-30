import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class RouterService {

  constructor(private router: Router) { }

  setRoute(param: {link: string}){
   return  this.router.navigateByUrl(param.link)
  }

  setFragment(param: {link: string, fragment: string}){
    return this.router.navigate([param.link], {fragment: param.fragment})
  }

}
