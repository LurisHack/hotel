import {Action} from "@ngrx/store";


export const SEGMENT_DATA = 'SEGMENT_DATA'

export class HeaderAction implements Action{
   readonly type = SEGMENT_DATA;
   payload: any

}
