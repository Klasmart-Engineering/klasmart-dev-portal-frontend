Feature: Landing page

  @open

  Scenario: Opening the app

    Given I open the app

    Then I see "Education infrastructure for the internet" on the page

  @type

  Scenario: Navigating to documentation

    Given I am on the landing page

    When I click "Learn More" button

    Then I am redirected to the documentation page