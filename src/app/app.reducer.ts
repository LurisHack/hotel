import {activatedRouteReducer, RouteState} from "./multi/store/activatedRoute/activatedRoute.reducer";
import {ActionReducerMap} from "@ngrx/store";
import {testingReducer, TestingState} from "./testing/store/testing.reducer";

export const rootReducer = {};

export interface AppState {
  activatedRoute: RouteState;
  testingValue: TestingState
}

export const reducers: ActionReducerMap<AppState, any> = {
  activatedRoute: activatedRouteReducer,
  testingValue: testingReducer
};
