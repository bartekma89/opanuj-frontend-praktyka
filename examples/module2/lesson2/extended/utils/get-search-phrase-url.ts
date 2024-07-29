export const getSearchPhraseUrl = (phrase: string): string => {
  return `https://en.wikipedia.org/wiki/Special:Search?fulltext=Search+the+frequently+asked+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=${phrase}&ns0=1`;
};
