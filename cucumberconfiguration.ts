import {Config} from "protractor";
import { createHook } from "async_hooks";
import * as reporter from "cucumber-html-reporter";

// An example configuration file
export let config:Config = {
  // onPrepare: () => {

  //   let globals = require('protractor');
    
  //   let browser = globals.browser;
    
  //   browser.manage().window().maximize();
    
  //   browser.manage().timeouts().implicitlyWait(10000);
    
  //   },
    // The address of a running selenium server.
  //  seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    cucumberOpts: {
      format:'json:./cucumberreport.json',
      
      tags:"@AngularTesting",
      require:[
        './step_definitions/*.js',
      ]
    },

    onComplete: () => {
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }

        
      };
      reporter.generate(options);
    },
  };