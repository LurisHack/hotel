import * as siteInformationAction from "./siteInformation.action";


export interface SiteInformationState {
  buildingName: any
}

const initialState = {
  buildingName: []
}


export const siteInformationReducer = (state = initialState, action: siteInformationAction.siteInformationAction): SiteInformationState => {
  switch (action.type) {
    case siteInformationAction.ADD_BUILDING_NAME:
      console.log(state, action)
      return {buildingName:  [...state.buildingName, action.payload]}
    case  siteInformationAction.SITE_INFORMATION:
      console.log(action)
      return {...state, ...action.payload}
  }
}



