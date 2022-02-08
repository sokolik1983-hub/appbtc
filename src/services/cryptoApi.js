import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'e7c84a29e6mshcc2f735189f232cp1d4c1djsn36b7b69c9677'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = ( url ) => ({
    url, headers: cryptoApiHeaders
});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {useGetCryptosQuery} = cryptoApi;