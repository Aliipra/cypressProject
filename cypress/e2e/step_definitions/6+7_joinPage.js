import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


import joinPage from "../../pages/joinPage";


  //    #                                       6+7

Given('I visit the join page', () => {
  joinPage.visit()
  joinPage.enterJoin()
  
});

When('I register as a new user {string} {string} {string}', (emailTest,code,num) => {
  joinPage.enterName('testUser')

  joinPage.choiceCategory()

  joinPage.enterNext()

  joinPage.enterFirstName('firstName')
  
  joinPage.enterLastName('lastName')

  joinPage.enterEmail(emailTest)

  joinPage.enterPhoneNumber(code,num)

  //joinPage.enterNext2()

  //joinPage.submit()

  //joinPage.enterPassword('Pop@Pop123456789')
});

Then('I check am in the join page', () => {
  joinPage.checkURL()

});
Then('I verify user can join successfully', () => {

joinPage.checkSuccJoin()
});


