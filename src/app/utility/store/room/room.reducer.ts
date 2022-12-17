import * as roomAction  from "./room.action";

const initialState = {value: ''}

export interface RoomState {
  value: string
}

export const roomReducer = (state = initialState, action: roomAction.RoomAction) : RoomState => {
  switch (action.type){
    case roomAction.ADD_BUILDING_NAME:
      return {value: action.payload}
  }
}
