import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import languageFeature from '../../pages/languageFeature'
import homePage from '../../pages/homePage'


Given('I visit the home page language',()=>{

    homePage.visit();



})


When('I change the language to Arabic',()=>{
    languageFeature.enterEngLang();
    languageFeature.arabicChange();

})

When('I change the language to English',()=>{
    languageFeature.enterArbLang();
    languageFeature.englishChange();

})


Then('I verify user can change the language to Arabic',()=>{

    languageFeature.checkArabicChange();

})

Then('I verify user can change the language to English',()=>{

    languageFeature.checkEnglishChange();

})