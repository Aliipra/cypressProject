import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import footerLinks from '../../pages/footerLinks'
import homepage from '../../pages/homePage'


Given('I visit the home page footer',()=>{
    homepage.visit()
})


Then('I verify all footer links work correctly',()=>{
    

    footerLinks.checkTitle()

    footerLinks.checkCategoryLinks()

    footerLinks.checkFeaturesLinks()

    footerLinks.checkLinks()

    footerLinks.checkEmail()

    footerLinks.checkWhatsApp()

    footerLinks.checkDownloadLinks()

    footerLinks.checkSocialMediaLinks()

    footerLinks.checkRequestFeature()



})