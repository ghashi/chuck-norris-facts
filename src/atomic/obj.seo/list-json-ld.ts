/** https://developers.google.com/search/docs/guides/mark-up-listings#summary-page--multiple-full-details-pages */
export const getListJsonLd = (list: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: list.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: item
  }))
});
