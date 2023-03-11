import { IComment } from "./../types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OneNews } from "../reducers/newsSlice";

export const hackerNewsApi = createApi({
     reducerPath: "pokemonApi",
     baseQuery: fetchBaseQuery({ baseUrl: "https://hacker-news.firebaseio.com/v0/" }),
     endpoints: (builder) => ({
          getIdsAllNews: builder.query<Array<number>, null>({
               query: () => `/newstories.json`
          }),
          getNewsById: builder.query<OneNews, string | number | undefined>({
               query: (storyId) => `/item/${storyId}.json`
          }),
          getComment: builder.query<IComment, number>({
               query: (commentId) => {
                    return {
                         url: `/item/${commentId}.json`,
                         params: {
                              print: "pretty"
                         }
                    };
               }
          })
     })
});

export const { useGetIdsAllNewsQuery, useLazyGetNewsByIdQuery, useGetNewsByIdQuery, useLazyGetCommentQuery } = hackerNewsApi;
