import { LiftActions } from './../find-a-lift/lift-actions';
import { tassign } from 'tassign';
import { TripState } from './store';

const INITIAL_STATE: TripState = {isLift: false, lifts:[] /**hardcoded data**/ };

export function tripsReducer(state: TripState = INITIAL_STATE, action: any) {
 switch (action.type) {
  case LiftActions.MyAction:

  case LiftActions.SET_TYPE:
    
    
    // return Object.assign({}, state, { isLift: action.payload });
    return tassign(state, { isLift: action.payload });

   default:
    return state;
}
}
