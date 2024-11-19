Feature: Login Page Functionality


    Scenario: Virify the login page
        Given I visit the login page
        When Checking Elements
        Then Check all page elements


    Scenario: Verify login functionality - Positive
        Given I visit the login page
        When I enter valid credentials "<userName>" "<password>"
        Then I verify user can log in


        Examples:
            | userName         | password |
            | uat@toptalla.com | 123qwe   |

    Scenario: Verify login functionality - Negative
        Given I visit the login page
        When I enter invalid credentials "<userName>" "<password>"
        Then I verify user can't log in


        Examples:
            | userName                      | password      |
            | eng.ali.m.ibrahim@hotmail.com | Pop@123456789 |

