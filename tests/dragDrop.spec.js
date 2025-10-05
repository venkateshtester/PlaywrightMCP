const { test, expect } = require('@playwright/test');

test('Manual Drag and Drop with Mouse Events', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/'); // or the site shown in video

  // Source and Target elements
  const source = page.locator('#box6');  // Example: "Rome"
  const target = page.locator('#box106'); // Example: "Italy"

  // Drag and Drop with mouse events
  await source.hover();
  await page.mouse.down();
  await target.hover();
  await page.mouse.up();

  await page.waitForTimeout(5000);
});
