import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Trip } from '../entities/trip';

@Injectable({ providedIn: 'root'})
export class LiftActions {
constructor(private ngRedux: NgRedux<AppState>) {} 
  
  static SET_TYPE: string = 'SET_TYPE'; 
  static MyAction: string = 'MY_ACTION'; 
  
  addLift(lift: Trip) {
    // ... you write code...
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
