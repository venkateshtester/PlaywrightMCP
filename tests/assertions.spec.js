const { test, expect } = require('@playwright/test');

test('Playwright Assertions Example', async ({ page }) => {
  // Navigate to the web app
  await page.goto('https://demo.nopcommerce.com/');
  

await expect(page).toHaveTitle('nopCommerce demo store. Home page title');


//   // 3. Assert logo or image is visible
   const logo = page.locator('//img[@alt="nopCommerce demo store"]');
   await expect(logo).toBeVisible();

     await page.click("//a[@class='ico-register']");

 // 4. Assert input is enabled
   const userInput = page.locator('//input[@id="FirstName"]');
  await expect(userInput).toBeEnabled();



//   // 5. Assert radio/checkbox is checked
   const genderMaleRadio = page.locator('//input[@id="gender-male"]');
   await genderMaleRadio.click();
   await expect(genderMaleRadio).toBeChecked();

  // 6. Assert element attribute value
   const link = page.locator('//a[normalize-space()="Sitemap"]');
   await expect(link).toHaveAttribute('href', '/sitemap');
   

  // 7. Assert exact text
   const heading = page.locator("//div[@role='button']");
   await expect(heading).toHaveText('Categories');

   // 8. Assert partial text (contains)
   const toast = page.locator('//span[@class="cart-label"]');
   await expect(toast).toContainText('Shopping');

   // 9. Assert input field value
   await userInput.fill('user123');
  await expect(userInput).toHaveValue('user123');

//   // 10. Assert count (number of menu items)
    await page.click("//img[@alt='nopCommerce demo store']");
   await page.click("//img[@title='Show details for Build your own computer']");

  const menuItems = page.locator("//select[@id='product_attribute_2']");

// Select an option by value
await menuItems.selectOption('3');

// Select an option by label (visible text)
await menuItems.selectOption({ label: '4GB [+$20.00]' });

// Select an option by index
await menuItems.selectOption({ index: 3 });
   await expect(menuItems).toHaveValue('5');

//   // Example negative assertion
   const rememberMe = page.locator("//input[@id='product_attribute_5_11']");
   await expect(rememberMe).not.toBeChecked();
});
