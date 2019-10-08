import { browser, element, by } from "protractor";

describe('Trip tests', () => {

  // 1.0: A simple test
  // 1.1: ...
  // 1.2:  ...

  it('1.0: should test that e2e works (simplest test)', () => {
    // Arrange (may be empty)
    // Act
    // Assert
    browser.get('');
    element(by.id('home-login')).click();
    expect(element(by.css("h1")).getText()).toEqual("Login");
    
    
    
    
    //write code to log in.

    // more code here

    expect(true).toBeTruthy();
  });

  it('I always pass (exams)', () => {

  });

});

