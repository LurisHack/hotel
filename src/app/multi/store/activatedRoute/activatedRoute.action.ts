import {Action} from "@ngrx/store";

export const ACTIVATED_ROUTE = 'ACTIVATED_ROUTE';

export class ActivatedRouteAction implements Action{
  readonly type = ACTIVATED_ROUTE;
   constructor(public payload: string) {
  }
}
