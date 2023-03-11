import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../types/types";

export interface AnswersOfComment {
     parentId: number | string;
     children: Array<IComment | undefined> | string;
}

// type InitialStateType = Array<AnswersOfComment> | never[]
const initialState: Array<AnswersOfComment> | { answers: any } = {
     answers: []
};

const answersSlice = createSlice({
     name: "answersSlice",
     initialState,
     reducers: {
          setAnswers(state, action: PayloadAction<AnswersOfComment>) {
               if (!state.answers.some((item: AnswersOfComment) => item.parentId === action.payload.parentId)) {
                    state.answers = [...state.answers, action.payload];
               }
          }
     }
});

export const { setAnswers } = answersSlice.actions;
export default answersSlice.reducer;
