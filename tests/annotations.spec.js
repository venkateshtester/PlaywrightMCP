const { test, expect } = require('@playwright/test');

// ONLY Annotation (run only this test)
// test.only('Runs only this test', async ({ page }) => {
//   console.log('This test will run exclusively');
// });

// SKIP Annotation (skip this test unconditionally)
test.skip('This test is skipped', async ({ page }) => {
  console.log('You will never see this');
});

// SKIP Annotation (conditionally, e.g. skip on Chromium)
test('Conditional skip', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skip on Chromium');
  console.log('Runs unless Chromium');
});

// FAIL Annotation (expecting test to fail)
test.fail('This test is expected to fail', async ({ page }) => {
  expect(1).toBe(2); // will fail
});

// FAIL Annotation (conditionally)
test('Conditional fail', async ({ page, browserName }) => {
  test.fail(browserName === 'firefox', 'This should fail on Firefox');
  expect(1).toBe(2); // will fail on Firefox
});

// FIXME Annotation (skip due to known bug/incomplete feature)
test.fixme('Test skipped using fixme', async ({ page }) => {
  // Intentionally do not run
});

// SLOW Annotation (give this test more time)
test('This test is slow', async ({ page }) => {
  test.slow();
  await page.goto('https://demoblaze.com/');
  // Simulate some long-running action
  await page.waitForTimeout(4000);
  expect(await page.title()).toBe('STORE');
});
