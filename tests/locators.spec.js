const {test, expect} = require('@playwright/test');

test('Locator', async ({page})=>{

 await page.goto('https://demoblaze.com/index.html');


 //click on login buttton using xpath
 await page.click("xpath=//a[@id='login2']");

//keyin value in username using css

await page.fill("#loginusername", 'pavanol')

//provide password using xpath

await page.fill("xpath=//input[@id='loginpassword']", 'test@123')

await page.click("xpath=//button[normalize-space()='Log in']")

const logoutlink = page.locator("//a[@id='logout2']");

    expect(logoutlink).toBeVisible;

await page.close();





})