"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
const calculator_1 = require("./pageObjects/calculator");
describe("Chain Locator Demo", () => {
    it("Open Angular js Website", () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator;
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calc.firstEditBox.sendKeys("3");
        yield calc.selectAllOperator.click();
        yield calc.secondEditBox.sendKeys("5");
        yield calc.go.click();
        protractor_1.browser.sleep(5000);
        // repeater, chain locators, CSS for identical Tags
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
    it("Anguler Home Page Title validation", () => __awaiter(void 0, void 0, void 0, function* () {
        let ah = new angularHomePage_1.angularHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        //await ah.angularLink.click();
        protractor_2.element(protractor_2.by.linkText("angular.io")).click().then(function () {
            protractor_1.browser.getAllWindowHandles().then(function (handles) {
                protractor_1.browser.getTitle().then(function (title) {
                    console.log("The Title of the Page Before switching to Child Window: " + title);
                });
            });
            protractor_1.browser.sleep(5000);
        });
        // await element(by.linkText("Get Started")).click();
        //await ah.search.sendKeys("Hello");
        //await browser.quit();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQywyQ0FBc0M7QUFDdEMsbUVBQWdFO0FBQ2hFLHlEQUFzRDtBQUV0RCxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRSxFQUFFO0lBQy9CLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFPLEVBQUU7UUFDbkMsSUFBSSxJQUFJLEdBQUMsSUFBSSx1QkFBVSxDQUFDO1FBQ3hCLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsR0FBTyxFQUFFO1FBRTlDLElBQUksRUFBRSxHQUFDLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQzdCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QywrQkFBK0I7UUFFL0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzVDLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxPQUFPO2dCQUMvQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7b0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELEdBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xGLENBQUMsQ0FBQyxDQUFBO1lBRU4sQ0FBQyxDQUFDLENBQUE7WUFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQVFKLHFEQUFxRDtRQUdwRCxvQ0FBb0M7UUFDcEMsdUJBQXVCO0lBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQyJ9