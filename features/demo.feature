Feature: I am going to validate Calculator App

@CalculatorTesting
Scenario: Calculator Add functionality testing
Given I will navigate to Calc Site
When I add two number "3" and "5"
Then the output displayed should be "8"

@AngularTesting
Scenario Outline: Cucumber parameterization

Given I will navigate to Angular JS page
When I clicked on header link
And you will navigate to different page
Then you enter "<key>" in search box

Examples:
| key |
| hello  |
| hey  |