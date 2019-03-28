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
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const calculator_1 = require("./page_objects/calculator");
describe("Chain Locators Demo", () => {
    it('Open Anglar js website', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://www.google.com");
    }));
    it('Angular home page title', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get("https://angularjs.org");
        yield protractor_2.element(protractor_2.by.linkText("angular.io")).click();
        yield protractor_2.element(protractor_2.by.css("input[aria-label='search']")).sendKeys("hello");
    }));
    it('by using POM', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        let c = new calculator_1.calculator();
        c.firstEditBox.sendKeys("3");
        c.secondEditBox.sendKeys("4");
    }));
});
