Feature: Website Functionality

    #                                       16
    Scenario: Verify contact us functionality - Positive
        Given I visit the home page contact us
        Then I verify user can contact us with valid data "<firstName>" "<phoneNumber>" "<email>" "<note>"

        Examples:
            | firstName | phoneNumber | email           | note |
            | Test1     | +9639444    | Email@Test.Test | Test |

    Scenario: Verify contact us functionality - Negative
        And I verify user can contact us with invalid data "<firstName>" "<phoneNumber>" "<email>" "<note>"

        Examples:
            | firstName | phoneNumber | email      | note |
            | Value     | 944         | Email@Test | Bug  |