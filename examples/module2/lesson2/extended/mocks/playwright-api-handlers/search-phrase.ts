import { Page } from '@playwright/test';

import playwrightPages from '../data/playwright.json';

export const setupSearchArticleHandler = async (page: Page) => {
  await page.route(
    '*/**/w/rest.php/v1/search/title?q=$Playwright&limit=10',
    async (route) => {
      await route.fulfill({ json: playwrightPages });
    }
  );
};

export const setupTheResultPage = async (page: Page) => {
  await page.setContent(`<html>
      <head>
        <title>Playwright - Wikipedia</title>
      </head>
        <body>
          <main>
            <h1>
              <span>Playwright</span>
            </h1>
          </main>
        </body>
      </html>`);

  await page.route('*/**/wiki/Playwright', async (route) => {
    await route.fulfill({
      contentType: 'text/html',
    });
  });
};
