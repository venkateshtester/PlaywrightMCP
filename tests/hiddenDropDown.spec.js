// Import the necessary modules from Playwright test
const { test, expect } = require('@playwright/test');

test('Handle Hidden Dropdowns', async ({ page }) => {
  // Launch the application and login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with actual URL
  await page.locator('input[name="username"]').fill('Admin');    // Username
  await page.locator('input[name="password"]').fill('admin123'); // Password
  await page.locator('button[type="submit"]').click();           // Login

  // Navigate to the PIM tab
  await page.locator('//span[text()="PIM"]').click();

  // Click the job title dropdown to reveal options
await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[3]").click();
await page.waitForTimeout(3000);

 const options = await page.$$('//div[@class="oxd-select-dropdown --positon-bottom"]');
    
    //await page.pause()
    for (const option of options) {
        const jobTitle = await option.textContent();
    // Select the required option (for example, "QA Engineer")
    
      await page.locator("//span[normalize-space()='QA Engineer']").click();
      break; // Exit loop after selecting
    
  }


  // Wait for the hidden options to be visible
  await page.waitForTimeout(3000);


});
