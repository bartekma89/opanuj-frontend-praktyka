import { test, expect } from '../../../fixtures';
import { CommunityPortalPage } from '../../../pages/community-portal.page';
import { HelpDeskPage } from '../../../pages/help-desk.page';
import { MainPage } from '../../../pages/main.page';
import { SearchPage } from '../../../pages/search.page';
import { SEARCH_PHRASE, URLs } from '../../../utils/constants';
import { getSearchPhraseUrl } from '../../../utils/get-search-phrase-url';

test('search the pharse in the help center', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPage();

  await expect(page).toHaveURL(URLs.COMMUNITY_PORTAL_PAGE);

  const communityPortalPage = new CommunityPortalPage(page);
  await communityPortalPage.goToHelpDesk();

  await expect(page).toHaveURL(URLs.HELP_DESK_PAGE);

  const helpDeskPage = new HelpDeskPage(page);
  await helpDeskPage.getSearchPhraseResults(SEARCH_PHRASE);

  await expect(page).toHaveURL(getSearchPhraseUrl(SEARCH_PHRASE));

  const searchPage = new SearchPage(page);

  await expect(searchPage.getInput()).toHaveValue(SEARCH_PHRASE);
  await expect(searchPage.everyLinksIncludePharse(SEARCH_PHRASE)).toBeTruthy();
});
