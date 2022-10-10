import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newscatcher.p.rapidapi.com',
    prepareHeaders: (headers, {}) => {
      headers.set(
        'X-RapidAPI-Key',
        '27b0e370b6mshe079838c9a8b376p1b0304jsn3afa749cbc13',
      );
      headers.set('X-RapidAPI-Host', 'newscatcher.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
