import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productList: Locator;
  readonly blouseItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#search_query_top');
    this.searchButton = page.locator('button[name="submit_search"]');
    this.productList = page.locator('.product_list');
    this.blouseItem = page.locator('#best-sellers_block_right > div > ul > li:nth-child(1) > div > h5 > a');
  }

  async goto() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async searchFor(text: string) {
    await this.searchInput.fill(text);
    await this.searchButton.click();
  }

  async hoverPageDown() {
    await this.page.keyboard.press('PageDown');
  }

  async isBlousePresent() {
    return await this.blouseItem.isVisible();
  }

  async clickBlouse() {
    await this.blouseItem.click();
  }
}
