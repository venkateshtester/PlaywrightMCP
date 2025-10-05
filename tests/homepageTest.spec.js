const {test, expect} = require('@playwright/test');

test('Home page', async({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    const pageTitle = page.title();

     console.log(pageTitle);

    await expect(page).toHaveTitle('STORE');


    const pageURL = page.url();
    console.log(pageURL);

    await page.close();



})