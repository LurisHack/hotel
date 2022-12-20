import {activatedRouteReducer, RouteState} from "./utility/store/activatedRoute/activatedRoute.reducer";
import {ActionReducerMap} from "@ngrx/store";
 import {siteInformationReducer, SiteInformationState} from "./utility/store/siteInformation/siteInformation.reducer";


export interface AppState {
  activatedRoute: RouteState
   siteInformation:  SiteInformationState
}

export const reducers: ActionReducerMap<AppState, any> = {
  activatedRoute: activatedRouteReducer,
  siteInformation: siteInformationReducer
};
