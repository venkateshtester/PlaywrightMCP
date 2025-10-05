const { test, expect } = require('@playwright/test');

test('Multi-select dropdown with Playwright', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Select multiple options by value (as JS array)
  await page.selectOption('#colors', ['blue', 'red', 'yellow']);

  // Pause to observe (optional)
  await page.waitForTimeout(5000);
});
