import {Action} from "@ngrx/store";

export const ADD_VALUE = 'ADD_VALUE'

export class TestingAction implements Action{
  readonly type = ADD_VALUE;

  constructor(public payload: number[]) {
  }

}
