Feature: Website Functionality

    #                                       12
    Scenario: Verify language change - English
        Given I visit the home page language
        When I change the language to Arabic
        Then I verify user can change the language to Arabic


    Scenario: Verify language change - Arabic

        When I change the language to English
        Then I verify user can change the language to English
