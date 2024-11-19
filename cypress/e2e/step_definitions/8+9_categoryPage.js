import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import categoryPage from '../../pages/categoryPage'
import homePage from '../../pages/homePage'


  //    #                                       8+9

Given('I visit the category page', () => {

  homePage.visit()
  categoryPage.enterCategory()

});


Then('I check am in the link of category page', () => {
  
  categoryPage.checkURL()

});

Then('I verify the element appears in the category page', () => {

  
  categoryPage.checkTitle()

  categoryPage.checkElements()


});


