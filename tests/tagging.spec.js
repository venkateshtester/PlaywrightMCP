// tags.spec.js
const { test } = require('@playwright/test');

// Test with 'sanity' tag
test('Test1 @sanity', async ({ page }) => {
    console.log("This is test one");
});

// Test with 'sanity' tag
test('Test2 @sanity', async ({ page }) => {
    console.log("This is test two");
});

// Test with 'regression' tag
test('Test3 @regression', async ({ page }) => {
    console.log("This is test three");
});

// Test with 'regression' tag
test('Test4 @regression', async ({ page }) => {
    console.log("This is test four");
});

// Test with both 'sanity' and 'regression' tags
test('Test5 @sanity @regression', async ({ page }) => {
    console.log("This is test five");
});



//Run only sanity tests
//npx playwright test tags.spec.js --grep @sanity

//Run only regression tests
//npx playwright test tags.spec.js --grep @regression

//Run only sanity and regression tests
//npx playwright test tags.spec.js --grep "@sanity @regression"

//run only sanity exclude regression
//npx playwright test tags.spec.js --grep @sanity --grep-invert @regression

//Run only regression exclude sanity
//npx playwright test tags.spec.js --grep @regression --grep-invert @sanity
