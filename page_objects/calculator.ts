import {ElementFinder, element, by} from 'protractor';


export class calculator{
    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;

    constructor(){
        this.firstEditBox=element(by.model("first"));
        this.secondEditBox=element(by.model("second"));
    }

    


}