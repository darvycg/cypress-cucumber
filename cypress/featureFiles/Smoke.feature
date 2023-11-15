Feature: Validate basics of the demo qa website

  Scenario: DemoQA website is loading
    Given I am on the DemoQA website
    Then I should be able to see the links
      | linkText                |
      | Elements                |
      | Forms                   |
      | Alerts, Frame & Windows |
      | Widgets                 |
      | Interactions            |
      | Book Store Application  |