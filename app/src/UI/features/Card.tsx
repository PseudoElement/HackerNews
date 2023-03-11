import React, { FC } from "react";
import { Card as CardMUI } from "@mui/material";
import ButtonCard from "../shared/ButtonCard";
import { OneNews } from "../../store/reducers/newsSlice";
import styles from "./styles/styles.module.css";
import { convertTime } from "../../utils/convertTime";
import TextField from "../shared/TextField";
import Rating from "../entites/Rating";

interface ICard {
     children?: React.ReactNode;
     data: OneNews;
}

const Card: FC<ICard> = ({ data }) => {
     return (
          <CardMUI className={styles.card} variant="outlined">
               <div className={styles.info}>
                    <TextField text={data.title} Tag="h2" />
                    <Rating value={data.score} />
                    <TextField type="author" text={data.by} Tag="h3" />
                    <TextField text={convertTime(data.time)} Tag="h3" />
               </div>
               <ButtonCard text="LEARN MORE" id={data.id} />
          </CardMUI>
     );
};

export default Card;
