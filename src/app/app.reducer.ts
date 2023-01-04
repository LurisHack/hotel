import {activatedRouteReducer, RouteState} from "./utility/store/activatedRoute/activatedRoute.reducer";
import {ActionReducerMap} from "@ngrx/store";
 import {siteInformationReducer, SiteInformationState} from "./utility/store/siteInformation/siteInformation.reducer";
import {segmentReducer, segmentState} from "./utility/store/header/header.reducer";


export interface AppState {
  activatedRoute: RouteState
   siteInformation:  SiteInformationState
  segmentData: segmentState
}

export const reducers: ActionReducerMap<AppState, any> = {
  activatedRoute: activatedRouteReducer,
  siteInformation: siteInformationReducer,
  segmentData: segmentReducer
};
