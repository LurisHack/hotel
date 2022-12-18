import * as siteInformationAction  from "./siteInformation.action";


export interface SiteInformationState {
  buildingName: any[]
}

const initialState = {
  buildingName: ['One']
  }


export const siteInformationReducer = (state = initialState, action: siteInformationAction.SiteInformationAction) : SiteInformationState => {
  switch (action.type){
    case siteInformationAction.ADD_BUILDING_NAME:
      console.log(state, action)

      return {buildingName: [...state.buildingName,action.payload]}}
  }

