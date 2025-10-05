const { test, expect } = require('@playwright/test');

// test('Handle alert dialog', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
  
//   // Register dialog handler before triggering the alert
//   page.once('dialog', async (dialog) => {
    
//     // Verify dialog type and message
//     expect(dialog.type()).toContain('alert');
//     expect(dialog.message()).toContain('I am an alert box!');
//     await dialog.accept(); // Accepts the alert
//   });

//   // Trigger the alert
//   await page.locator("//button[@id='alertBtn']").click();
//   await page.waitForTimeout(2000);

  


// });

// test('Handle confirmation dialog', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');

//   page.on('dialog', async (dialog) => {
//     expect(dialog.type()).toContain('confirm');
//     expect(dialog.message()).toContain('Press a button!');
//     await dialog.accept(); // Use dialog.dismiss() to click 'Cancel'
//   });

//   // Trigger confirmation
//   await page.locator('//button[@id="confirmBtn"]').click();
//   await page.waitForTimeout(2000);

//   // Validate page text after handling dialog
//   await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
// });


test('Handle prompt dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  page.on('dialog', async (dialog) => {
    // Check type, message and default value if needed
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('John'); // Provide value and accept
  });

  // Trigger prompt
  await page.click('//button[@id="promptBtn"]');
  await page.waitForTimeout(2000);

  // Validate result
  await expect(page.locator('//*[@id="demo"]')).toHaveText('Hello John! How are you today?');
});