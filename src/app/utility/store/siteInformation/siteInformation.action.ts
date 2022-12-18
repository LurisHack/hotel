import {Action} from "@ngrx/store";

export const ADD_BUILDING_NAME = 'ADD_BUILDING_NAME'
export const SITE_INFORMATION = 'SITE_INFORMATION'

export class AddBuildingNameAction implements Action {
  readonly type = ADD_BUILDING_NAME

  constructor(public payload: string) {
  }
}

  export class SiteInformation implements Action{
  readonly type = SITE_INFORMATION
    constructor(public payload: any) {
    }
}
