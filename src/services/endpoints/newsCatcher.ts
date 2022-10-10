import {LatestHeadlines} from 'configs/types';
import api from 'services/api';

const newsCatcher = api.injectEndpoints({
  endpoints: builder => ({
    latestHeadlines: builder.query<
      LatestHeadlines,
      {lang: string; media: string}
    >({
      query: ({lang, media}) => ({
        url: `v1/latest_headlines?lang=${lang}&media=${media}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useLatestHeadlinesQuery} = newsCatcher;
