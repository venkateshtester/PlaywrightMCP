const { test, expect } = require('@playwright/test');

test('Handle single checkbox', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Locator example: Select the Monday checkbox by its id
  const mondayCheckbox = page.locator("//input[@id='checkBoxOption1']");

  // Check (select) the checkbox
  await mondayCheckbox.check();

  // Assert the checkbox is checked
  await expect(mondayCheckbox).toBeChecked();
  expect(await mondayCheckbox.isChecked()).toBeTruthy();

  // Uncheck (deselect) the checkbox
  await mondayCheckbox.uncheck();

  // Assert it is not checked
  await expect(mondayCheckbox).not.toBeChecked();
  expect(await mondayCheckbox.isChecked()).toBeFalsy();

// handling multiple checkboxes
  // Locator for all checkboxes
  const checkboxes = page.locator('//*[@id="checkbox-example"]/fieldset/label/input');
  const count = await checkboxes.count();

  // Loop through each checkbox
  for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).check(); // check the box
    await expect(checkboxes.nth(i)).toBeChecked(); // assertion works now
  }

  await page.waitForTimeout(3000); // Optional: just for demo pausing to observe UI
});
