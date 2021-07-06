import { Config } from "protractor";
var reporter = require('cucumber-html-reporter');
//import * as reporter from "cucumber-html-reporter";


export let config: Config = {
  //seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: true,
  framework: "custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ["../features/demo.feature"],
  cucumberOpts: {
  //tags: "@calculatorTesting",
    format: 'json:./cucumberReport.json',
    require: [
      '../JSFiles/stepDefinations/*.js'
    ]
  },

onComplete: ()=>
{
  var options = {
    theme: 'bootstrap',
    jsonFile: './JSFiles/cucumberReport.json',
    output: './cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
}
  /*capabilities: {
      'browserName': 'internet explorer'
    }*/
  // Option to be passed to Jasmine-node
};
