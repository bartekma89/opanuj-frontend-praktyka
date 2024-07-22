import test, { expect } from '@playwright/test';
import { STORAGE_STATE } from '../../../../playwright.config';

test('login into wiki account', async ({ page }) => {
  await page.goto('/');

  const mainPageNavigation = page.getByRole('navigation', {
    name: 'Personal tools',
  });

  await mainPageNavigation.getByRole('link', { name: 'Log in' }).click();

  await page.waitForURL(/.*Special:UserLogin*/);

  const loginForm = page.locator('#userloginForm');

  await loginForm.getByLabel(/Username/).fill(process.env.USERNAME0!);
  await loginForm.getByLabel(/Password/).fill(process.env.PASSWORD0!);

  await loginForm.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page');
  await expect(mainPageNavigation).toContainText(process.env.USERNAME0!, {
    ignoreCase: true,
  });

  await page.context().storageState({ path: STORAGE_STATE });
});
