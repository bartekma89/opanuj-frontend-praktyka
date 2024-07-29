import { expect, test } from '../../../fixtures';
import {
  setupSearchArticleHandler,
  setupTheResultPage,
} from '../../../mocks/playwright-api-handlers/search-phrase';
import { MainPage } from '../../../pages/main.page';
import { URLs } from '../../../utils/constants';

test('search first playwright article', async ({ page }) => {
  await setupSearchArticleHandler(page);

  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.searchFor('playwright');
  const list = page.getByRole('listbox', { name: /Search results/i });
  await list.waitFor();
  await mainPage.getFirstSearchResult().getByRole('link').click();

  await page.waitForURL(URLs.PLAYWRIGHT_RESULT_PAGE);

  await setupTheResultPage(page);

  await expect(
    page.getByRole('heading', { name: 'Playwright', exact: true })
  ).toBeVisible();
});
