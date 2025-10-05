const { test, expect } = require('@playwright/test');

test('Handle inner/nested frames', async ({ page }) => {
  // Launch the main page containing nested frames
  await page.goto('https://ui.vison/demo/webtest/frames/');

  // 1. Get the parent frame by URL/SRC
  const parentFrame = await page.frame({ url: /frame3.html/ }); // adjust the regex/URL as needed

  // 2. Interact directly with element inside parent frame
  // Example: Fill input box inside parent frame
  await parentFrame.fill('input[name="mytext3"]', 'Welcome!'); // change selector as per your page

  await page.waitForTimeout(5000);

  // 3. Handle nested frame inside parent frame
  const childFrames = parentFrame.childFrames(); // gets all child frames under parent

  // 4. Interact with an element inside the nested child frame (first child)
  await childFrames[0].locator('input[type="radio"][value="male"]').check(); // example selector for a radio button

  await page.waitForTimeout(5000);
});
