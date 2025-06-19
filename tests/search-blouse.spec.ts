import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/searchPage';

test('Search and select Blouse item', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.goto();
  await searchPage.searchFor('T-shirts');
  //await searchPage.hoverPageDown();
  const isBlouseVisible = await searchPage.isBlousePresent();
  expect(isBlouseVisible).toBeTruthy();
  await searchPage.clickBlouse();
  // Optionally, add more assertions here to verify navigation to the Blouse details page
});
