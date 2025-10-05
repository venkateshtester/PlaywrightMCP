const { test, expect } = require('@playwright/test');

test('Mouse Right Click/Context Click Action', async ({ page }) => {
  // Step 1: Launch the application
  await page.goto('https://swisnap.com/demo-buttons/'); // Example: use the URL from the video or your test site

  // Step 2: Locate the right-click target element
  const button = page.locator('//span[text()="right click me"]'); // Adjust XPath as per your actual element

  // Step 3: Perform right click (context click) action
  await button.click({ button: 'right' });

  // Step 4: Wait to observe result of right-click (optional)
  await page.waitForTimeout(3000);
});


test('Mouse Double Click Action', async ({ page }) => {
  // Open the target application
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate the element to double click (e.g., "Copy Text" button)
  const btnCopy = page.locator('//button[text()="Copy Text"]'); // Use XPath or correct selector

  // Perform double-click action
  await btnCopy.dblclick();

  // Verify that text was copied from first field to second
  const field2 = page.locator('#field2');
  await expect(field2).toHaveValue('Hello World'); // Update expected value as per scenario

  // Wait for output visibility (optional)
  await page.waitForTimeout(5000);
});

