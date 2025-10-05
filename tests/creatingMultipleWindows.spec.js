const { chromium, expect, test } = require('@playwright/test');

test('Handle Multiple Pages/Windows in Playwright', async () => {
  // Create browser and context
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // Create first page (tab)
  const page1 = await context.newPage();
  await page1.goto('https://example.com');
  await expect(page1).toHaveTitle('Example Domain');

  // Create a second page (tab)
  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev/');
  await expect(page2).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

  // Count number of pages
  const allPages = context.pages();
  console.log('Number of pages created: ', allPages.length); // Should be 2

  // Switch context as needed (by referring to page1 and page2 objects)
  // ...perform more actions if required...

  await browser.close();
});
