import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import featurePage from '../../pages/featurePage'
import homePage from '../../pages/homePage'

Given('I visit the feature page',()=>{
    homePage.visit()
    featurePage.enterFeature()
})

Then('I check am in the link of feature page',()=>{
    cy.url().should('eq','https://business.toptalla.com/en/features/')
})
Then('I verify all elements appear in the feature page',()=>{
    featurePage.checkElements()
})