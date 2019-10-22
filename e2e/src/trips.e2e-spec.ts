import { browser, element, by, protractor } from "protractor";

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

  // it('should ', () => {

  //   expect()
  // });

  it('should create new trip', () => {
    browser.get('');
    element(by.id('home-login')).click();
    // browser.sleep(2000);
    element(by.id('username-input')).sendKeys('username');
    element(by.id('password-input')).sendKeys('password');
    element(by.id('login-button')).click();
    
    element(by.id('findalift-button')).click();


    element.all(by.css('.example-card')).then((el) => {
      const before = el.length; // eg before = 3
      element(by.id('registertrip-button')).click();
      element(by.css('input[formControlName=origin]')).sendKeys('Gentofte');
      element(by.css('input[formControlName=destination]')).sendKeys('Copenhagen');
      element(by.css('input[formControlName=availableSeats]')).sendKeys('4');
      element(by.css('input[formControlName=departureTime]')).sendKeys('22-10-2019' + protractor.Key.TAB + '10-05');
      // browser.sleep(3000);
      element(by.id('registerTrip')).click();
      
      // browser.sleep(3000);
      element.all(by.css('.example-card')).then((el2) => {
        const after = el2.length; // eg after = 4

        expect(before + 1).toEqual(after);
      });
    });
  });
});

