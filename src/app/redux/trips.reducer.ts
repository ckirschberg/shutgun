import { tassign } from 'tassign';
import { TripState } from './store';
import { LiftActions } from '../find-a-lift/lift-actions';

const INITIAL_STATE: TripState = {isLift: false };

export function tripsReducer(state: TripState = INITIAL_STATE, action: any) {
 switch (action.type) {
  case LiftActions.SET_TYPE:
    
    // return Object.assign({}, state,{ isLifts: action.payload });
    return tassign(state, { isLift: action.payload });

   default:
    return state;
}
}
