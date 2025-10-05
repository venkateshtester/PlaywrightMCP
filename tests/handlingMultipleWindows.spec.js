const { chromium, expect, test } = require('@playwright/test');

test('Handle Child Window/Popup', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demo.nopcommerce.com/');

  // Wait for the new page (popup) event
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Listen for new page event
    page.locator('//a[text()="Facebook"]').click(), // This should open a new tab/window
  ]);

  // Work with both pages
  await expect(newPage).toHaveTitle('NopCommerce | Facebook');
  await expect(page).toHaveTitle('nopCommerce demo store');

  // You can interact with both:
  console.log(await page.title());
  console.log(await newPage.title());

  await browser.close();
});
