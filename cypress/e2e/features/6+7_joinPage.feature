Feature: Website Functionality

    #                                       6+7
    Scenario: Verify join functionality
        Given I visit the join page
        When I register as a new user "<EMAIL>" "<CODE>" "<GSM>"
        Then I check am in the join page
        And I verify user can join successfully

        Examples:
            | EMAIL                | CODE | GSM       |
            | testtest@test.test   | +963 | 123456456 |
            | test2test@test2.test | +963 | 123456123 |

