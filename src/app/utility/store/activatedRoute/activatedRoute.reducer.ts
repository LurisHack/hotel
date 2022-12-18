import * as ActivateRouteAction from './activatedRoute.action';

const initialState = {activatedRoute: '/'}

export interface RouteState{
  activatedRoute: string;
}

export const activatedRouteReducer =
  (state: RouteState = initialState, action: ActivateRouteAction.ActivatedRouteAction): RouteState => {
    switch (action.type) {
      case ActivateRouteAction.ACTIVATED_ROUTE:
        return {activatedRoute: action.payload}
    }
  }

