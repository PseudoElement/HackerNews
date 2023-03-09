import { createSlice } from "@reduxjs/toolkit";

export interface OneNews {
     by: string;
     descendants: number;
     id: number;
     score: number;
     time: number;
     title: string;
     type: string;
     url: string;
     kids?: Array<number>;
}

type InitialState = { news: Array<OneNews> };

const initialState: InitialState = {
     news: []
};

const newsSlice = createSlice({
     name: "newsSlice",
     initialState,
     reducers: {
          setNewsArr(state, action) {
               state.news = action.payload;
          }
     }
});

export const { setNewsArr } = newsSlice.actions;
export default newsSlice.reducer;
