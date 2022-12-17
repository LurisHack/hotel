import {Action} from "@ngrx/store";

export const ADD_BUILDING_NAME = 'ADD_BUILDING_NAME'

export class RoomAction implements Action{
  readonly type = ADD_BUILDING_NAME
  constructor(public payload: string) {
  }
}
