"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../page_objects/calculator");
cucumber_1.Given('I will navigate to Calc Site', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    });
});
cucumber_1.When('I add two number {string} and {string}', function (string, string2) {
    return __awaiter(this, void 0, void 0, function* () {
        let c = new calculator_1.calculator();
        yield c.firstEditBox.sendKeys(string);
        yield c.secondEditBox.sendKeys(string2);
    });
});
cucumber_1.Then('the output displayed should be {string}', function (string) {
});
cucumber_1.Given('I will navigate to Angular JS page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org");
    });
});
cucumber_1.When('I clicked on header link', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.linkText("angular.i")).click();
    });
});
cucumber_1.When('you will navigate to different page', function () {
});
cucumber_1.Then('you enter {string} in search box', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css("input[aria-label='search']")).sendKeys(string);
    });
});
