import { test, expect } from '@playwright/test';

test('Search and click Blouse item', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // 2. Search for "T-shirts"
  await page.getByRole('textbox', { name: 'Search' }).fill('T-shirts');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');

  // 3. Hover page down
  await page.keyboard.press('PageDown');

  // 4. Verify the "Blouse" item is present in the list
  const blouseLink = page.getByRole('link', { name: 'Blouse' });
  await expect(blouseLink).toBeVisible();

  // 5. Click the Blouse
  await blouseLink.click();

  // Optionally, verify navigation to the Blouse product page
  await expect(page).toHaveURL(/id_product=2/);
  await expect(page.getByRole('heading', { name: 'Blouse' })).toBeVisible();
});
