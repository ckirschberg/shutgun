import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Trip } from '../entities/trip';

@Injectable({ providedIn: 'root'})
export class LiftActions {
constructor(private ngRedux: NgRedux<AppState>) {} 
  
  static SET_TYPE: string = 'SET_TYPE'; 
  static MyAction: string = 'MY_ACTION'; 
  static CREATE_TRIP: string = 'CREATE_TRIP'; 
  static DELETE_TRIP: string = 'DELETE_TRIP'; 
  
  createTrip(trip: Trip): void {
    this.ngRedux.dispatch({
      type: LiftActions.CREATE_TRIP,
      payload: trip
    });
  }

  deleteTrip(id: string): void {
    this.ngRedux.dispatch({
      type: LiftActions.DELETE_TRIP,
      payload: id
    });
  }

  
  callMyAction(isLift: boolean): void {
    this.ngRedux.dispatch({
      type: LiftActions.MyAction,
      payload: isLift
    });
  }

  setType(isLift: boolean): void {
    this.ngRedux.dispatch({
      type: LiftActions.SET_TYPE,
      payload: isLift
    });
  }
}
