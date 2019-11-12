import { LiftActions } from './../find-a-lift/lift-actions';
import { tassign } from 'tassign';
import { TripState } from './store';
import { DataService } from '../data.service';
import { Trip } from '../entities/trip';

let ds = new DataService();
const INITIAL_STATE: TripState = {isLift: false, lifts: ds.tempData };

export function tripsReducer(state: TripState = INITIAL_STATE, action: any) {
 switch (action.type) {
  case LiftActions.CREATE_TRIP:
    // Should: ___Create a new state object___
    // create a copy of the lifts-array.
    // Add the new lift to the copy of the array.

    // Mutating state. NOT ALLOWED!
    // state.lifts.push(action.payload);
    // return state;

    const newLifts = state.lifts.concat([action.payload]);
    return tassign(state, { lifts: newLifts });
    
    case LiftActions.DELETE_TRIP:
      const afterDeleteTrips: Trip[] = 
        state.lifts.filter(trip => trip._id !== action.payload);

      return tassign(state, { lifts: afterDeleteTrips });


  // case LiftActions.MyAction:
    

  case LiftActions.SET_TYPE:
    // return Object.assign({}, state, { isLift: action.payload });
    return tassign(state, { isLift: action.payload });

   default:
    return state;
}
}
