Feature: Website Functionality

    #                                       2+3
    Scenario: verify the element in home page
        Given I visit the home page
        When I hover on each elements
        Then I verify the URL of the landing page
        And I verify the welcome element in the home page
        And I verify all tabs in the home page
