import {Config} from "protractor";

export let config:Config = {
   //seleniumAddress: "http://localhost:4444/wd/hub",
   directConnect:true,
    specs: ["testspec.js"],  
    /*capabilities: {
        'browserName': 'internet explorer'
      }*/
      // Option to be passed to Jasmine-node
      jasmineNodeOpts: {
          showColors: true, // Use color in command line report
      }
  };
  