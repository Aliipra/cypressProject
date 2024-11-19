import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import homePage from '../../pages/homePage'

  //    #                                       2 + 3
Given('I visit the home page', ()=>{
homePage.visit()
homePage.homeTap()
})    

When('I hover on each elements',()=>{
homePage.hoverElements()
})


Then('I verify the welcome element in the home page', ()=>{


homePage.checkURL()
homePage.checkElements()

})

Then('I verify all tabs in the home page', () => {

homePage.checkTaps()


});


Then('I verify the URL of the landing page', () => {


homePage.checkTitle()

});
