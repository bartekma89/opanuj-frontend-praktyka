import { http, HttpResponse } from 'msw';

import playwrightPages from '../data/playwright.json';

export const searchHandlers = [
  http.get('w/rest.php/v1/search/title?q=playwright&limit=10', () => {
    return HttpResponse.json({
      pages: playwrightPages,
    });
  }),
];
