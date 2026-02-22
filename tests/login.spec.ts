import { test, expect } from '@playwright/test';

test('Login and verify home page', async ({ page }) => {
  // Step 1: Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Ensure the page is fully loaded
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Login with provided credentials
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Step 3: Verify home page
  await expect(page).toHaveURL(/dashboard/); // Assuming the URL contains 'dashboard' after login
  await expect(page.locator('h6')).toHaveText('Dashboard'); // Assuming 'Dashboard' is a visible text on the home page
});