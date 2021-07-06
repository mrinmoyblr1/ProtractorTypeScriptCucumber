import {After, Before, Status} from "@cucumber/cucumber";
import { browser } from "protractor";
Before(function () {
  // This hook will be executed before all scenarios
});
Before({tags: "@AngularTesting"}, function () {
    browser.manage().window().maximize();
    console.log("This is under Before Hooks for @AngularTesting....")
});
After({tags: "@AngularTesting"}, function () {  
  console.log(".........The Test is Completed..........")
});
Before({tags: "@calculatorTesting"}, function () {
    console.log("I need to execute this one First")
    console.log("This is under Before hooks for @AngularTesting...")
});

//To Take Screenshots
After(async function (scenario) {
  if(scenario.result.status==Status.FAILED)
  {
    const screenshot=await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});
