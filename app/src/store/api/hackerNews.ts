import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hackerNewsApi = createApi({
     reducerPath: "pokemonApi",
     baseQuery: fetchBaseQuery({ baseUrl: "https://hacker-news.firebaseio.com/v0/" }),
     endpoints: (builder) => ({
          getIdsAllNews: builder.query({
               query: () => `/newstories.json`
          }),
          getNewsById: builder.query({
               query: (storyId) => `/item/${storyId}.json`
          }),
          getComments: builder.query({
               query: (storyId) => {
                    return {
                         url: `/item/${storyId}.json?print=pretty`
                    };
               }
          })
     })
});

export const { useGetIdsAllNewsQuery, useLazyGetNewsByIdQuery, useGetNewsByIdQuery, useGetCommentsQuery } = hackerNewsApi;
