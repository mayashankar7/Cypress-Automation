Feature: Login

  Scenario Outline: Login to Orange CRM Website

    Given User is at the Amazon homepage
    When User search for any product
    When User clicks on login button
    Then User is able to successfully login to the Website
    Examples:
      | username | password |
      | Admin    | admin123 |