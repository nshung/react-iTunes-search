// @flow
/* eslint import/prefer-default-export: 0 */

export type SearchResult = {
  trackPrice?: number,
  collectionPrice?: number,
  price?: number,
  trackViewUrl?: string,
  collectionViewUrl?: string,
  artworkUrl100: string,
  trackName?: string,
  collectionName?: string,
  kind: string,
  artistName: string,
  longDescription?: string,
  description?: string,
  releaseDate?: string
};
