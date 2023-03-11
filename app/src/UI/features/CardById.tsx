import React, { FC } from "react";
import { Card as CardMUI } from "@mui/material";
import { OneNews } from "../../store/reducers/newsSlice";

interface ICardById {
     data: OneNews;
}

const CardById: FC<ICardById> = ({ data }) => {
     return <CardMUI></CardMUI>;
};

export default CardById;
