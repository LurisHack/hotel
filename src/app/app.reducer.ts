import {activatedRouteReducer, RouteState} from "./utility/store/activatedRoute/activatedRoute.reducer";
import {ActionReducerMap} from "@ngrx/store";
import {testingReducer, TestingState} from "./testing/store/testing.reducer";
import {roomReducer, RoomState} from "./utility/store/room/room.reducer";


export interface AppState {
  activatedRoute: RouteState
  testingValue: TestingState
  room:  RoomState
}

export const reducers: ActionReducerMap<AppState, any> = {
  activatedRoute: activatedRouteReducer,
  testingValue: testingReducer,
  room: roomReducer
};
