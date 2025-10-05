// Import the required Playwright test functions
const { test, expect } = require('@playwright/test');

test('Playwright Built-in Locators Example', async ({ page }) => {
  // Go to application page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 1. Locate an image by its alt text
  const logo = await page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

//   // 2. Locate inputs by placeholder
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');

//   // 3. Locate a button by role and click it
   await page.getByRole('button', { type: 'submit' }).click();

//   // 4. Locate an element by its visible text
   await expect(page.getByText('manda user')).toBeVisible();

//   // 5. Locate a form field by associated label’s text
//   await page.getByLabel('Search').fill('Playwright');

//   // 6. Locate an element by its title attribute
//   await expect(page.getByTitle('User Settings')).toBeVisible();

//   // 7. Locate by test id (commonly used for test automation)
//   await page.getByTestId('dashboard-welcome').click();
});
