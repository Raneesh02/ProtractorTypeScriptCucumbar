import {browser} from "protractor"
import {element,by} from "protractor"
import { async } from "q";
import { calculator } from "./page_objects/calculator";


describe("Chain Locators Demo", ()=>{
   
    it('Open Anglar js website', async()=>{
    browser.waitForAngularEnabled(false);
    await browser.get("https://www.google.com");
    })


    it('Angular home page title',async()=>{
        browser.get("https://angularjs.org");
        await element(by.linkText("angular.io")).click();
        await element(by.css("input[aria-label='search']")).sendKeys("hello");
    })

    it('by using POM', async()=>{
        browser.get("https://juliemr.github.io/protractor-demo/");
        let c=new calculator();
        c.firstEditBox.sendKeys("3");
        c.secondEditBox.sendKeys("4");

    })

})