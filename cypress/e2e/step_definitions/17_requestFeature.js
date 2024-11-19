import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


import requestFeature  from '../../pages/requestFeature'
import homePage from '../../pages/homePage'


Given('I visit the home page Request a Feature',()=>{
    homePage.visit()
    requestFeature.enterRequestFeature()
})

Then('I verify user can send a feature request with valid data {string} {string} {string} {string} {string} {string} {string}',(name,email,phoneNumber,type,Importants,section,message)=>{
    requestFeature.enterForm(name,email,phoneNumber,+type,+Importants,section,message)

})

Then('I verify user can send a feature request with invalid data',()=>{
    


})