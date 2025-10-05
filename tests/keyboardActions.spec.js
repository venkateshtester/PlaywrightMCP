const { test, expect } = require('@playwright/test');

test('Playwright Keyboard Actions - Copy Paste Between Inputs', async ({ page }) => {
  // Open the application page with the two text boxes
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Type text into the first input box
  await page.fill("//input[@id='name']", 'Welcome to auto');

  // Select all text (Ctrl + A), copy (Ctrl + C)
  await page.keyboard.press('Meta+a');   // On Mac: 'Meta+A'
  await page.keyboard.press('Meta+c');   // On Mac: 'Meta+C'

  // Press Tab to move to second input box
  await page.keyboard.press('Tab');

  // Paste in second box (Ctrl + V)
  await page.keyboard.press('Meta+v');   // On Mac: 'Meta+V'

  // (Optional) Assert the value is copied as expected
  await expect(page.locator("//input[@id='email']")).toHaveValue('Welcome to auto');

  // Wait for visual confirmation (optional)
  await page.waitForTimeout(3000);
});
