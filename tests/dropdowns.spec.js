const { test, expect } = require('@playwright/test');

test('Select dropdown using label', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Select country by label (visible text)
  await page.locator('#country').selectOption({ label: 'India' });

    //Using value as Text
  await page.locator('#country').selectOption('India');

   //Using as Option value
   await page.locator('#country').selectOption({ value: 'uk' }); 

   //Using index
   await page.locator('#country').selectOption({ index: 1 });

   //Using select option
   await page.selectOption('#country', 'India');

   //Assert number of options
    const options1 = page.locator("//*[@id='country']/option");
  await expect(options1).toHaveCount(10); 

  //using for loop iterate all options and select one option
 const options = await page.$$("//*[@id='country']/option");
  for (const option of options) {
    const value = await option.textContent();
    if (value.includes('India')) {
      await page.locator('#country').selectOption({ label: 'India' });

      
    }
  }
  
});
