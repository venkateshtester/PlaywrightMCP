const { test, expect } = require('@playwright/test');

test('Handle WebTable with Pagination in Playwright', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate table by ID
  const table = page.locator('#productTable');

  // Find all columns (TH elements)
  const columns = table.locator('thead tr th');
  console.log('Number of columns:', await columns.count());
  expect(await columns.count()).toBe(4);

  // Find all rows (TR elements in tbody)
  const rows = table.locator('tbody tr');
  console.log('Number of rows:', await rows.count());
  expect(await rows.count()).toBe(5);



 

  // ✅ Define target product names
  const targetProducts = ['Smartphone', 'Tablet'];

  // ✅ Get all product names (td[2])
  const productElements = await page.$$("//div[@class='table-container']/table/tbody/tr/td[2]");

  console.log(`Total products found: ${productElements.length}`);

  // ✅ Iterate over all product names
  for (let i = 0; i < productElements.length; i++) {
    const productName = (await productElements[i].textContent()).trim();
    console.log(`Checking: ${productName}`);

    // ✅ If product matches our target list
    if (targetProducts.includes(productName)) {
      console.log(`✔️ Match found: ${productName}`);

      // ✅ Click checkbox from same row (td[4])
      const checkbox = page.locator(`//div[@class='table-container']/table/tbody/tr[${i + 1}]/td[4]/input[@type='checkbox']`);
      await checkbox.check();

      // Remove matched name from target list (optional)
      const index = targetProducts.indexOf(productName);
      if (index > -1) targetProducts.splice(index, 1);

      // Stop early if all found
      if (targetProducts.length === 0) break;
    }
  }

  await page.waitForTimeout(2000);


  

  // Print all product details (excluding checkbox column)
 for (let i = 0; i < await rows.count(); i++) {
    const row = rows.nth(i);
    const tds = row.locator('td');
    for (let j = 0; j < await tds.count() - 1; j++) { // -1 to skip checkbox column
      console.log(await tds.nth(j).textContent());
    }
  }

  // Handle Pagination - Read all pages' data
  const pages = page.locator('.pagination li a');
  console.log('Numbers of page in a table:' , await pages.count())
  for (let p = 0; p < await pages.count(); p++) {
    if (p > 0) await pages.nth(p).click();
    
    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i);
      const tds = row.locator('td');
      for (let j = 0; j < await tds.count() - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
    await page.waitForTimeout(4000); // Wait for clarity during page change
  }
});
