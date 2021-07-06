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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
});
cucumber_1.Before({ tags: "@AngularTesting" }, function () {
    protractor_1.browser.manage().window().maximize();
    console.log("This is under Before Hooks for @AngularTesting....");
});
cucumber_1.After({ tags: "@AngularTesting" }, function () {
    console.log(".........The Test is Completed..........");
});
cucumber_1.Before({ tags: "@calculatorTesting" }, function () {
    console.log("I need to execute this one First");
    console.log("This is under Before hooks for @AngularTesting...");
});
//To Take Screenshots
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBeUQ7QUFDekQsMkNBQXFDO0FBQ3JDLGlCQUFNLENBQUM7SUFDTCxrREFBa0Q7QUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUU7SUFDOUIsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUE7QUFDckUsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FBQyxDQUFDO0FBQ0gsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyxFQUFFO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUE7QUFDcEUsQ0FBQyxDQUFDLENBQUM7QUFFSCxxQkFBcUI7QUFDckIsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFFLGlCQUFNLENBQUMsTUFBTSxFQUN4QztZQUNFLE1BQU0sVUFBVSxHQUFDLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==