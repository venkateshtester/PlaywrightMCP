const { test, expect } = require('@playwright/test');

test('Handle Date Picker - Calendar UI', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Define target date
  const year = "2028";
  const month = "March";
  const date = "20";

  await page.click('#datepicker'); // open date picker

  // Loop until target year/month is found
  while(true) {
    // Capture current calendar year & month
    const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    if (currentYear === year && currentMonth === month) {
      break;  // Exit loop when at desired month/year
    }

    await page.locator('.ui-datepicker-next').click(); // Click next button
  }

  // Select appropriate date
  const dates = await page.$$('.ui-state-default'); // all date elements
  for (const dt of dates) {
    if ((await dt.textContent()) === date) {
      await dt.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
