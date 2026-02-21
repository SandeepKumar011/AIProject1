Feature: Login to OrangeHRM

  Scenario: Login with valid credentials
    Given I navigate to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    When I login with username "Admin" and password "admin123"
    Then I should see the home page