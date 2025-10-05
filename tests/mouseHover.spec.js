const { test, expect } = require('@playwright/test');

test('Mouse hover action example', async ({ page }) => {
  // Open the application
  await page.goto('http://www.automationpractice.pl/index.php');

  // Locate the "Desktops" menu using an XPath or any preferred locator
  const desktops = await page.locator('//a[@title="Women"]');

  // Perform mouse hover on "Desktops"
  await desktops.hover();

  // Locate the "Mac (1)" submenu under "Desktops"
  const mac = await page.locator("//li[@class='sfHover']//ul//li//a[@title='T-shirts'][normalize-space()='T-shirts']");

  // Perform mouse hover on "Mac (1)"
  await mac.hover();

  // Wait to visually confirm the hover (optional)
  await page.waitForTimeout(5000);
});
