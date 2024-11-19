import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import faqPage from '../../pages/faqPage'
import homePage from '../../pages/homePage'

Given('I visit the FAQ page',()=>{
    homePage.visit()
    faqPage.enterFAQ()
})





Then('I verify all elements appear in the FAQ page',()=>{
    faqPage.checkURL()
    faqPage.checkFAQTitle()
    faqPage.checkFAQ()
    faqPage.checkFAQBar()
    faqPage.checkSignForm()

})