import { OneNews } from "../reducers/newsSlice";

export interface IComment {
     by: string;
     id: number;
     parent: number;
     text: string;
     time: number;
     type: string;
}
