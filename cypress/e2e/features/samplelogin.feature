Feature: samplelogin to system

    validate  the user can make login to enter dashboard
    Background:
        Given i navigate to the url 
    Scenario: validate login 

        When user be on  home page
        And user can click on login button 
        And login page appear 
        And user can enter his credentials 
        Then user navigate to dashboard