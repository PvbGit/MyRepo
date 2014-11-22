Feature: Logging into Salesforce
In order to work
As a sales person
I want to Login

Scenario Outline: Logging into salesforce
Given I navigate to "loginURL" on "<Browser>"
And I enter "loginusername" as "<Uname>"
And I enter "loginpassword" as "<Pword>"
When I click on "loginButton"
Then Login "userNavLabel" should be "<Expected_Result>"

Examples:
|  Browser  |  Uname                       | Pword         | Expected_Result |
|  Mozilla   |  xxxx                           | xxxx           | failure               |
|  Mozilla   |  pvbranga4@yahoo.com | Treaty&123  | success             |
|  Chrome  |  xxxx                           | xxxx           | failure               |
|  Chrome  |  pvbranga4@yahoo.com | Treaty&123  | success             |
