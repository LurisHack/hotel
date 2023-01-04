import * as  header  from './header.action'

export interface segmentState{
  segmentData: string;
}

export const segmentReducer = (state:{ segmentData: string} =  { segmentData: 'Available'},
                               action: header.HeaderAction): any => {
  switch (action.type){
    case header.SEGMENT_DATA:
      return {segmentData: action.payload}
  }
}
