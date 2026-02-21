import { expect } from '@playwright/test';

export class LoginPage {
  async navigateTo(url: string) {
    await page.goto(url);
  }

  async login(username: string, password: string) {
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
  }

  async verifyHomePage() {
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('h6')).toHaveText('Dashboard');
  }
}