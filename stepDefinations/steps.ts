import { Given, When, Then } from "@cucumber/cucumber";
import { browser } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import { calculator } from "../pageObjects/calculator";
import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;
chai.should();

let calc = new calculator();
let ah = new angularHomePage();

Given('I will navigate to {string} Site', async (string) => {
  await browser.waitForAngularEnabled(true);
  await browser.driver.manage().window().maximize();
  if (string == "Calc") {
    await browser.get("http://juliemr.github.io/protractor-demo/");
  }
  else if (string == "AngularJS") {
    await browser.get("https://angularjs.org/");
  }
});


When('I add two numbers {string} and {string}', async (string, string2) => {
  await calc.firstEditBox.sendKeys(string);
  await calc.selectAllOperator.click();
  await calc.secondEditBox.sendKeys(string2);
});


Then('The output display should be {string}', async (string) => {
  await calc.go.click();
  await browser.sleep(4000);
  console.log("The String Value is:  " + string);
  // repeater, chain locators, CSS for identical Tags
  await calc.getResult.getText().then(function (text) {
    expect(text).to.equal(string);
    assert.equal(text, string);
    text.should.equal(string);



    console.log(text);
  });
});


When('I clicked on header link', async () => {
  await ah.angularLink.click();
});

When('will navigate to AngularJS Page', async () => {
  console.log("Navigate to New Page");
});


Then('I\'ll enter {string} in the Search Box', async (string) => {
  //await browser.sleep(4000);
  console.log("The Test Data is: " + string);
  //await ah.search.sendKeys(string);
});
