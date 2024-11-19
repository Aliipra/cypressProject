Feature: Website Functionality

    #                                       16
    Scenario: Verify Request a Feature functionality - Positive
        Given I visit the home page Request a Feature
        Then I verify user can send a feature request with valid data "<name>" "<email>" "<phoneNumber>" "<requestType>" "<importants>" "<section>" "<message>"
        #  "<section>" "<explain>"
        Examples:
            | name | email            | phoneNumber | requestType | importants | section   | message |
            | name | phone@em.ailNumber | 963963944   | 2           | 1          | Marketing | Test    |
    # | name2 | phoneemailNumber | 963963944   | 2           |
    # | name3 | phoneemailNumber | 963963944   | 3           |
    # | name4 | phoneemailNumber | 963963944   | 4           |

    Scenario: Verify Request a Featur functionality - Negative
        And I verify user can send a feature request with invalid data

        Examples:
            | Header 1 | Header 2 | Header 3 |
            | Value 1  | Value 2  | Value 3  |