const { test, expect } = require('@playwright/test');

// Optional: Hooks (beforeAll, afterAll, beforeEach, afterEach)
test.beforeAll(async () => {
  console.log('This is before all hook');
});
test.afterAll(async () => {
  console.log('This is after all hook');
});
test.beforeEach(async () => {
  console.log('This is before each hook');
});
test.afterEach(async () => {
  console.log('This is after each hook');
});

// Group 1
test.describe('Group 1', () => {
  test('Test 1', async ({ page }) => {
    console.log('This is my test 1');
    // (actual steps if any)
  });
  test('Test 2', async ({ page }) => {
    console.log('This is my test 2');
    // (actual steps if any)
  });
});

// Group 2
test.describe('Group 2', () => {
  test('Test 3', async ({ page }) => {
    console.log('This is my test 3');
    // (actual steps if any)
  });
  test('Test 4', async ({ page }) => {
    console.log('This is my test 4');
    // (actual steps if any)
  });
});
