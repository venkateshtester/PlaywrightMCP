const { test, expect } = require('@playwright/test');

test('Capture visible screenshot example', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

  await page.screenshot({ path: 'screenshots/homepage.png' });
});



//Full page screenshot

test('Capture full page screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

  await page.screenshot({ path: 'screenshots/homepage_full.png', fullPage: true });
});


//Specific element screenshot

test('Capture element screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

  const logo = page.locator('img[title="Your Store"]');
  await logo.screenshot({ path: 'screenshots/logo.png' });
});


//If need to take screenshots every steps then in playwright.config.js add below code
// use: {
//   screenshot: 'on',  // or 'only-on-failure'
// }
