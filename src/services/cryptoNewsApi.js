import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {cryptoApi} from "./cryptoApi";

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'e7c84a29e6mshcc2f735189f232cp1d4c1djsn36b7b69c9677'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = ( url ) => ({
    url, headers: cryptoNewsHeaders
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {useGetCryptosNewsQuery} = cryptoNewsApi;