const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
const { CartPage } = require('../pages/cartPage');

test('POM pattern End-to-End test on DemoBlaze', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('yourUsername', 'yourPassword');
  await homePage.addProductToCart('Nexus 6');
  await page.waitForTimeout(3000);
  await homePage.goToCart();
  await page.waitForTimeout(3000);
  const isProductAdded = await cartPage.checkProductInCart('Nexus 6');
  expect(isProductAdded).toBeTruthy();
});
