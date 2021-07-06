Feature: I'm going to validate the Calculator App

    @calculatorTesting
    Scenario: Calculator App functionality testing
        Given I will navigate to "Calc" Site
        When I add two numbers "3" and "5"
        Then The output display should be "15"

    @calculatorTesting
    Scenario: Calculator App functionality Testing No. 2
        Given I will navigate to "Calc" Site
        When I add two numbers "4" and "5"
        Then The output display should be "20"

    @AngularTesting
    Scenario Outline: Angular validations
        Given I will navigate to "AngularJS" Site
        When I clicked on header link
        And will navigate to AngularJS Page
        Then I'll enter "<Key>" in the Search Box

        Examples:
            | Key     | Value |
            | Hello   | 1     |
            | Hey     | 2     |
            | Hi      | 3     |
            | Mrinmoy | 4     |
            | Biswas  | 5     |




