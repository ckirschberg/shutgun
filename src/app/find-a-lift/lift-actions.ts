import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Trip } from '../entities/trip';

@Injectable({ providedIn: 'root'})
export class LiftActions {
constructor (private ngRedux: NgRedux<AppState>) {} 
  
  static SET_TYPE: string = 'SET_TYPE'; 
  
  addLift(lift: Trip) {
    // ... you write code...
  }
  setType(isLift: boolean): void {
    this.ngRedux.dispatch({
      type: LiftActions.SET_TYPE,
      payload: isLift
    })
  }
}
