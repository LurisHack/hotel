import * as siteInformationAction  from "./siteInformation.action";


export interface AddBuildingNameState {
  buildingName: any[]
}

export interface SiteInformationState {
  buildingName: any[]
}

const initialState = {
  buildingName: []
  }


export const siteInformationReducer = (state = initialState, action: siteInformationAction.AddBuildingNameAction) : AddBuildingNameState  => {
  switch (action.type) {
    case siteInformationAction.ADD_BUILDING_NAME:
      console.log(state, action)
      return {buildingName: [...state.buildingName, action.payload]}

    // case  siteInformationAction.SITE_INFORMATION:
    //   return {}

}
  }



