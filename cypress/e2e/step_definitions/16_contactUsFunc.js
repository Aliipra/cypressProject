import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


import contactUsFunc from '../../pages/contactUsFunc'
import homePage from '../../pages/homePage'


Given('I visit the home page contact us',()=>{
    homePage.visit()
    contactUsFunc.enterContactUS()
})

Then('I verify user can contact us with valid data {string} {string} {string} {string}',(firstName,phoneNumber,email,note)=>{
    
    contactUsFunc.checkTitle()

    contactUsFunc.checkForm(firstName,phoneNumber,email,note)

    contactUsFunc.CheckValidForm()

})

Then('I verify user can contact us with invalid data {string} {string} {string} {string}',(firstName,phoneNumber,email,note)=>{
    
    contactUsFunc.checkTitle()

    contactUsFunc.checkForm(firstName,phoneNumber,email,note)

    contactUsFunc.CheckInvalidForm()


})