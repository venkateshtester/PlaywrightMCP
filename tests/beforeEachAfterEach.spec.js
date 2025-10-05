const { test, expect } = require('@playwright/test');

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'pavanol');
  await page.fill('#loginpassword', 'test@123');
  await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');
});

test.afterEach(async () => {
  await page.click('#logout2');
  await page.close();
});
test('Home Page Test', async () => {

  const products = await page.$$('//*[@id="tbodyid"]/div/div/div/h4/a');
  expect(products).toHaveLength(9);
});

test('Add Product to Cart Test', async () => {
  // Add Product to Cart actions...
});
