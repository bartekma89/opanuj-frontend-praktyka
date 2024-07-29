import { test, expect } from '@playwright/test';

test.describe('rick and morty characters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Wyszukiwarka postaci/);
  });

  test('should render the list of ricks', async ({ page }) => {
    await page.getByRole('textbox', { name: /Name/i }).fill('Rick');

    await expect(page.getByRole('listitem')).toHaveCount(20);
  });

  test('should render picture and title', async ({ page }) => {
    await page.getByLabel(/Gender/i).selectOption({ label: 'Male' });
    await page.getByLabel(/Sort by/i).selectOption({ label: 'Name' });

    await expect(
      page.getByRole('heading', { name: /Abradolf Lincler/i })
    ).toBeVisible();
    await expect(page.getByAltText(/Abradolf Lincler/i)).toBeVisible();
  });
});
