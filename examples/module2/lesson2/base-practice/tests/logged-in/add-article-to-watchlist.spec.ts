import test, { expect } from '@playwright/test';

test('add article to watchlist', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page');

  const mainPageNavigation = page.getByRole('navigation', {
    name: 'Personal tools',
  });

  await expect(mainPageNavigation).toContainText(process.env.USERNAME0!, {
    ignoreCase: true,
  });
});
