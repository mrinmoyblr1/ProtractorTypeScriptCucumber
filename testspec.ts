import {browser} from "protractor";
import {element,by} from "protractor";
import { angularHomePage } from "./pageObjects/angularHomePage";
import { calculator } from "./pageObjects/calculator";

describe("Chain Locator Demo", ()=> {
    it("Open Angular js Website", async()=> {
        let calc=new calculator;
        browser.driver.manage().window().maximize();
        browser.get("http://juliemr.github.io/protractor-demo/");
        await calc.firstEditBox.sendKeys("3");        
        await calc.selectAllOperator.click();
        await calc.secondEditBox.sendKeys("5");
        await calc.go.click();
        browser.sleep(5000);
        // repeater, chain locators, CSS for identical Tags
        calc.getResult.getText().then(function(text)
                {
            console.log(text);
                });
    });

    it("Anguler Home Page Title validation", async()=>
    {
        let ah=new angularHomePage();
        await browser.get("https://angularjs.org/");
        //await ah.angularLink.click();

        element(by.linkText("angular.io")).click().then(function(){
            browser.getAllWindowHandles().then(function(handles){
                browser.getTitle().then(function(title){
                    console.log("The Title of the Page Before switching to Child Window: "+title);					  
                })				  
    
            })
            browser.sleep(5000);
        });







       // await element(by.linkText("Get Started")).click();


        //await ah.search.sendKeys("Hello");
        //await browser.quit();
    })
  });





  









  
