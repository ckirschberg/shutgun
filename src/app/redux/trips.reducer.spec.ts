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
    const inputState = { isLift: false, lifts: ds.tempData }; // Configuring my previous state
    const actionObject = { type: types.LiftActions.SET_TYPE, payload: true }; // Action object
    const expectedOutput = {isLift: true, lifts: ds.tempData }; // After test I want this!

    deepFreeze(inputState);
    // Act
    const result = tripsReducer(inputState, actionObject); // Perform test

    // Assert
    expect(result).toEqual(expectedOutput); // If true, test passes
  });


});
