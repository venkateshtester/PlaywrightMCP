// Import from Playwright test module
// const { test, expect } = require('@playwright/test');

// test('Hard Assertions Example', async ({ page }) => {
//   // Launch the application
//   await page.goto('https://demoblaze.com/index.html');
  
//   // Hard assertions
//   await expect(page).toHaveTitle('STORE');                    // Fails if title does not match, stops here
//   await expect(page).toHaveURL('https://demoblaze.com/index.html');     // Only runs if above passes
//   await expect(page.locator('a.navbar-brand')).toBeVisible(); // Only runs if previous pass
// });



const { test, expect } = require('@playwright/test');

test('Safe Assertions Example', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await safeExpect(
    () => expect(page).toHaveTitle('Store123'),
    "Title check"
  );

  await safeExpect(
    () => expect(page).toHaveURL('https://demoblaze.com/index.html'),
    "URL check"
  );

  await safeExpect(
    () => expect(page.locator('a.navbar-brand')).toBeVisible(),
    "Navbar brand visibility check"
  );

  console.log("✅ Test finished without failing.");
});



async function safeExpect(assertionFn, message) {
  try {
    await assertionFn();
  } catch (err) {
    console.log(`${message || 'Assertion failed'}: ${err.message}`);
  }
}
