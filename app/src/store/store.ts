import { configureStore } from "@reduxjs/toolkit";
import { hackerNewsApi } from "./api/hackerNews";
import { setupListeners } from "@reduxjs/toolkit/query";
import newsSlice from "./reducers/newsSlice";
import answersSlice from "./reducers/answersSlice";

export const store = configureStore({
     reducer: {
          [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
          newsSlice,
          answersSlice
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hackerNewsApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
