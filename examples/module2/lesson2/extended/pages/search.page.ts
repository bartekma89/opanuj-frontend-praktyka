import { Locator, Page } from '@playwright/test';

export class SearchPage {
  private readonly listResults: Locator;
  private readonly searchInput: Locator;
  private readonly listItems: Locator;

  constructor(page: Page) {
    this.listResults = page.locator('ul.mw-search-results');
    this.listItems = this.listResults.locator('li');
    this.searchInput = page.locator('#searchText').getByRole('combobox');
  }

  getInput() {
    return this.searchInput;
  }

  async everyLinksIncludePharse(phrase: string) {
    await this.listResults.waitFor();

    return await this.listItems.evaluateAll((item, term) => {
      return item.every((liItem) => liItem.textContent?.includes(term));
    }, phrase);
  }
}
