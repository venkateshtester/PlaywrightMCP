import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // generate code here.
  });

  test('Basic Test - Verify Google Title', async ({ page }) => {
    // Navigate to Google
    await page.goto('https://www.google.com');

    // Verify the page title
    await expect(page).toHaveTitle('Google');
  });
});
