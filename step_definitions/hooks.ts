import { After, Before, Status } from "cucumber";
import { browser } from "protractor";
import { fail } from "assert";

Before(function(){
    browser.manage().window().maximize();
})

Before({tags:"@AngularTesting"}, function(){
    console.log("I need to execute first");
})

After(async function(scenario){
    console.log("Test is completed");
    if(scenario.result.status == Status.FAILED){
        const screenshot=await browser.takeScreenshot();
        this.attach(screenshot,"image/png");        
    }
})

