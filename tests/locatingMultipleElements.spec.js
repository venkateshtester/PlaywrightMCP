const { test, expect } = require('@playwright/test');

test('Locate multiple <a> elements', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');


   //get all products
  // Wait until products are visible before proceeding
  await page.waitForSelector("//div[@id='tbodyid']//h4//a");

  // Query elements AFTER waiting
  const products = await page.$$("//div[@id='tbodyid']//h4//a");

  for (const product of products) {
    try {
      const productName = await product.textContent();
      console.log(productName);
    } catch (error) {
      console.error('Error getting product name:', error);
    }
  }




    // Locate all <a> elements using XPath
    const links = await page.$$('xpath=//a');
    console.log(`Found ${links.length} <a> elements.`);
    for (const link of links) {
        const text = await link.textContent();
        console.log(text);
    }

    await page.close();


   

    

});