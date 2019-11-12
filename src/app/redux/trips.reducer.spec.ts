const deepFreeze = require('deep-freeze');
import { tripsReducer } from './trips.reducer';
import * as types from './../find-a-lift/lift-actions';
import { DataService } from '../data.service';

describe('trips reducer', () => {

  it('should return the initial state', () => {
    // ARRANGE - ACT - ASSERT
    
    //Arrange
    const ds = new DataService();
    const expectedOutput = {isLift: false, lifts: ds.tempData};

    // Act
    const result = tripsReducer(undefined, {});

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('set isLift to true', () => {
    // Arrange
    const ds = new DataService();
    const expectedOutput = {isLift: true, lifts: ds.tempData };
    const inputState = { isLift: false, lifts: ds.tempData };
    const actionObject = { type: types.LiftActions.SET_TYPE, payload: true };

    // Act
    const result = tripsReducer(inputState, actionObject);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  
});
