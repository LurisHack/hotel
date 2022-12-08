import {activatedRouteReducer, RouteState} from "./multi/store/activatedRoute/activatedRoute.reducer";
import {ActionReducerMap} from "@ngrx/store";

export const rootReducer = {};

export interface AppState {
  activatedRoute: RouteState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  activatedRoute: activatedRouteReducer
};
