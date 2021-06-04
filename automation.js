//Requiring puppeteer package in a variable pup
let pup=require('puppeteer');
let gPage;

//Using launch function of pupeteer to launch a browser(this function returns a promise)
pup
.launch({headless:false,
        defaultViewport:null,
        args:["--start-maximized"]})

//This then attaches a function to above promise of opening a browser
.then(function(browser) {
    //In this function we get a browser object in the argument 
    //using that object we are opening a new page by calling newPage method on that object. (This again gives us a promise.
    //All puppeteer functions/methods gives us a promise
    return browser.newPage()
// THis then attaches a function to promise of opening a new page
}).then(function(page) {
    //Inside this function we get a page object in the argument
    //We are saving that object in a global variable called gPage
    gPage = page;

    //Calling goto function on page object to go to google.com(gives a promise)
    return page.goto('https://www.google.com')
    //Attaches a function to promise of opening google.com
}).then(function() {   
    return gPage.type("input.gLFyf.gsfi","Cats");
}).then(function() {
    //gPage.waitForNavigation(waitOptions);
    return Promise.all([
    gPage.waitForNavigation(),
    gPage.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b')
    ]);
}).then(function() {
    return Promise.all([
    gPage.waitForNavigation(),
    gPage.click('#hdtb-msb > div:nth-child(1) > div > div:nth-child(2) > a')
    ]);
}).then(function() {
    //This function gives us a promise that it will take the screenshot and save it with a name of ss.png
    return gPage.screenshot({path:"ss.png"});
}).catch(function(err) {
    console.log(err);
})