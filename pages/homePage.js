class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = '//div[@class="card-block"]//h4/a';
    this.addToCartBtn = 'a.btn-success';
    this.cartLink = '#cartur';
  }
  async addProductToCart(productName) {
    const allProducts = await this.page.$$(this.productList);
    for (const product of allProducts) {
      const name = await product.textContent();
      if (name.trim() === productName) {
        await product.click();
        break;
      }
    }
    // Handle alert after clicking 'Add to cart'
    this.page.on('dialog', async dialog => {
      if (dialog.message().includes('added')) await dialog.accept();
    });
    await this.page.locator(this.addToCartBtn).click();
  }
  async goToCart() {
    await this.page.locator(this.cartLink).click();
  }
}
module.exports = { HomePage };
