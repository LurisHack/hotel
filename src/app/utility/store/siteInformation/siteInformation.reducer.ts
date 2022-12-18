import * as roomAction  from "./siteInformation.action";

const initialState = {buildingName: ''}

export interface SiteInformationState {
  buildingName: string
}

export const siteInformationReducer = (state = initialState, action: roomAction.SiteInformationAction) : SiteInformationState => {
  switch (action.type){
    case roomAction.ADD_BUILDING_NAME:
      console.log(state, action)
      

      return {buildingName: action.payload}
  }
}
