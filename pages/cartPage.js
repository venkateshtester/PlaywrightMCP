class CartPage {
  constructor(page) {
    this.page = page;
    this.productRows = '//tr[@class="success"]/td[2]';
  }
  async checkProductInCart(productName) {
    const products = await this.page.$$(this.productRows);
    for (const product of products) {
      const name = await product.textContent();
      if (name.trim() === productName) return true;
    }
    return false;
  }
}
module.exports = { CartPage };
