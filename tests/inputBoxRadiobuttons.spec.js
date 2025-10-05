const { test, expect } = require('@playwright/test');

test('Handle input box in Playwright', async ({ page }) => {
  // Launch the application
  await page.goto('https://demo.nopcommerce.com/register');

  // Locate the input element (example uses id='name')
  const firstNameInput = page.locator('//input[@id="FirstName"]');

  // Assert input is visible
  await expect(firstNameInput).toBeVisible();

  // Assert input is empty
  await expect(firstNameInput).toBeEmpty();

  // Assert input is editable and enabled
  await expect(firstNameInput).toBeEditable();
  await expect(firstNameInput).toBeEnabled();

  // Enter value into the box
  await firstNameInput.fill('John');

  // Alternative: page.fill('#name', 'John');
  // await page.fill('#name', 'John');

    // Locate the radio buttons using XPath or CSS as appropriate
  const maleRadio = page.locator("//label[@for='gender-male']");
  const femaleRadio = page.locator("//label[@for='gender-female']");

  // Select the 'male' radio button
  await maleRadio.check();

  // Assert 'male' radio is checked
  await expect(maleRadio).toBeChecked();
  expect(await maleRadio.isChecked()).toBeTruthy();

  // Assert 'female' radio is not checked
  expect(await femaleRadio.isChecked()).toBeFalsy();

  // Pause for 5 seconds so UI effect is visible (optional, for demo)
  await page.waitForTimeout(5000);
});
