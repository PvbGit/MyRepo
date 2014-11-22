$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/qtpselenium/app/salesforce/login/LogInUser.feature");
formatter.feature({
  "id": "logging-into-salesforce",
  "description": "In order to work\r\nAs a sales person\r\nI want to Login",
  "name": "Logging into Salesforce",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-into-salesforce;;2",
  "description": "",
  "name": "Logging into salesforce",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to \"loginURL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"xxxx\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"xxxx\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Login \"userNavLabel\" should be \"failure\"",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 15
    },
    {
      "val": "Mozilla",
      "offset": 29
    }
  ],
  "location": "LogInTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 12165783333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "xxxx",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 442063352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "xxxx",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 475810841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogInTest.I_click_on(String)"
});
formatter.result({
  "duration": 754677346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userNavLabel",
      "offset": 7
    },
    {
      "val": "failure",
      "offset": 32
    }
  ],
  "location": "LogInTest.Then_login_username_should_be(String,String)"
});
formatter.result({
  "duration": 30216014033,
  "status": "passed"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-into-salesforce;;3",
  "description": "",
  "name": "Logging into salesforce",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to \"loginURL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"pvbranga4@yahoo.com\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"Treaty\u0026123\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Login \"userNavLabel\" should be \"success\"",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 15
    },
    {
      "val": "Mozilla",
      "offset": 29
    }
  ],
  "location": "LogInTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 1145942579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "pvbranga4@yahoo.com",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 81412877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "Treaty\u0026123",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 67867225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogInTest.I_click_on(String)"
});
formatter.result({
  "duration": 5551564171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userNavLabel",
      "offset": 7
    },
    {
      "val": "success",
      "offset": 32
    }
  ],
  "location": "LogInTest.Then_login_username_should_be(String,String)"
});
formatter.result({
  "duration": 21766407954,
  "status": "passed"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-into-salesforce;;4",
  "description": "",
  "name": "Logging into salesforce",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to \"loginURL\" on \"Chrome\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"xxxx\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"xxxx\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Login \"userNavLabel\" should be \"failure\"",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 15
    },
    {
      "val": "Chrome",
      "offset": 29
    }
  ],
  "location": "LogInTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 14759311770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "xxxx",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 1165031909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "xxxx",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 110109041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogInTest.I_click_on(String)"
});
formatter.result({
  "duration": 16805730687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userNavLabel",
      "offset": 7
    },
    {
      "val": "failure",
      "offset": 32
    }
  ],
  "location": "LogInTest.Then_login_username_should_be(String,String)"
});
formatter.result({
  "duration": 30016370422,
  "status": "passed"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-into-salesforce;;5",
  "description": "",
  "name": "Logging into salesforce",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to \"loginURL\" on \"Chrome\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"pvbranga4@yahoo.com\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"Treaty\u0026123\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Login \"userNavLabel\" should be \"success\"",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 15
    },
    {
      "val": "Chrome",
      "offset": 29
    }
  ],
  "location": "LogInTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 1115461783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "pvbranga4@yahoo.com",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 1399110148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "Treaty\u0026123",
      "offset": 28
    }
  ],
  "location": "LogInTest.I_enter(String,String)"
});
formatter.result({
  "duration": 115038338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LogInTest.I_click_on(String)"
});
formatter.result({
  "duration": 8341863331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userNavLabel",
      "offset": 7
    },
    {
      "val": "success",
      "offset": 32
    }
  ],
  "location": "LogInTest.Then_login_username_should_be(String,String)"
});
formatter.result({
  "duration": 21250491775,
  "status": "passed"
});
});