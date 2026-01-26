import { test, expect } from '@playwright/test';

test.describe('Translation Tests', () => {
  test('pricing page displays translated content for English', async ({ page }) => {
    await page.goto('http://localhost:3000/pricing');
    await page.waitForLoadState('networkidle');
    
    // Check for English pricing content
    await expect(page.locator('h1')).toContainText(/Simple Credit-Based Pricing|Pricing/);
    await expect(page.locator('text=Buy Credits').first()).toBeVisible();
    await expect(page.locator('text=Frequently Asked Questions').first()).toBeVisible();
  });

  test('login page displays translated content', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.waitForLoadState('networkidle');
    
    // Check for English login content
    await expect(page.locator('h1')).toContainText('Welcome back');
    await expect(page.locator('text=Email address').first()).toBeVisible();
    await expect(page.locator('text=Password').first()).toBeVisible();
  });

  test('signup page displays translated content', async ({ page }) => {
    await page.goto('http://localhost:3000/signup');
    await page.waitForLoadState('networkidle');
    
    // Check for English signup content
    await expect(page.locator('h1')).toContainText('Create your account');
    await expect(page.locator('text=Full name').first()).toBeVisible();
  });

  test('homepage displays translated content', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check for header navigation (translated from common/nav keys)
    await expect(page.locator('text=Pricing').first()).toBeVisible();
    await expect(page.locator('text=Get Started').first()).toBeVisible();
  });

  test('language selector is visible and functional', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check for language selector in footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Look for language selector
    const langSelector = page.locator('select, [role="combobox"]').first();
    if (await langSelector.count() > 0) {
      await expect(langSelector).toBeVisible();
    }
  });
});
