import { test, expect } from '../src/fixtures/testWithFixtures';
// Use existing JS page object
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { LoginPage } = require('../pages/loginPage');

test.describe('Login', () => {
  test('login modal works on Demoblaze', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLoginPage();
    await login.login('testuser', 'testpass');
    await expect(page.locator('#nameofuser')).toBeVisible({ timeout: 5000 });
  });
});


