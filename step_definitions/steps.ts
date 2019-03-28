import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor";
import { calculator } from "../page_objects/calculator";


    Given('I will navigate to Calc Site', async function(){
        await browser.get("https://juliemr.github.io/protractor-demo/");
    });

    When('I add two number {string} and {string}',async function(string,string2){
        let c=new calculator();
       await c.firstEditBox.sendKeys(string);
       await c.secondEditBox.sendKeys(string2);
       
    });

    Then('the output displayed should be {string}', function(string){
        
       
    });

    Given('I will navigate to Angular JS page', async function(){
        await browser.get("https://angularjs.org");
    })

    When('I clicked on header link', async function(){
        await element(by.linkText("angular.io")).click();       
    })
    
    When('you will navigate to different page', function(){
    
       
    })

    Then('you enter {string} in search box', async function(string){
        await element(by.css("input[aria-label='search']")).sendKeys(string);
    })

