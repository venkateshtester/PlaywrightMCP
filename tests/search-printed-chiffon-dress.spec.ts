import { test, expect } from '@playwright/test';

test('Search and select Printed Chiffon Dress', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // 2. Search for "T-shirts"
  await page.getByRole('textbox', { name: 'Search' }).fill('T-shirts');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');

  // 3. Hover page down
  await page.keyboard.press('PageDown');

  // 4. Verify the "Printed Chiffon Dress" item is present in the list using the provided XPath locator
  const dressLink = page.locator("//ul[@class='block_content products-block']//a[@class='product-name'][normalize-space()='Printed Chiffon Dress']");
  await expect(dressLink).toBeVisible();

  // 5. Click the Printed Chiffon Dress
  await dressLink.click();

  // Verify navigation to the product page
  await expect(page).toHaveURL(/id_product=7/);
  await expect(page.getByRole('heading', { name: 'Printed Chiffon Dress' })).toBeVisible();
});
