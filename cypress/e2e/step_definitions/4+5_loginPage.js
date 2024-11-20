import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from '../../pages/loginPage'
import homePage from '../../pages/homePage'


Given('I visit the login page', () => {
  // homePage.visit()
  // loginPage.loginFunc()
  loginPage.visit()
  
});  

When('Checking Elements', () => {
  cy.log('Checking Elements')  
});
When('I enter invalid credentials {string} {string}', (userName,password) => {
  
  loginPage.enterUserName(userName)
  loginPage.enterPassword(password)
  loginPage.submit()
  
});  
When('I enter valid credentials {string} {string}', (userName,password) => {
  
  loginPage.enterUserName(userName)
  loginPage.enterPassword(password)
  loginPage.submit()
  
});  

Then('Check all page elements', () => {
    // cy.get('.bk-subtitle-text').should('be.visible')  
  loginPage.checkElements()
  
  });
Then('I verify user can log in', () => {
  // cy.get('.bk-subtitle-text').should('be.visible')
  loginPage.checkURL()
  cy.log('Test2')

  cy.get('.undefined').should('be.visible')
});


Then("I verify user can't log in", () => {
  // cy.get('.bk-subtitle-text').should('be.visible')
  loginPage.checkURL()
  cy.log('Test3')
  cy.get('.undefined').should('not.be.visible')

  cy.on('window:alert', (str) => {
            expect(str).to.equal('المعرف أو كلمة مرور غير صحيحة')
        })

});



// Given('I visit the login page', () => {
//       // homePage.visit()  
//       // loginPage.loginFunc()
//       loginPage.visit()
    
//     });
    

    
    
