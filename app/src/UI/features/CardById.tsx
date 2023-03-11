import React, { FC } from "react";
import { Card as CardMUI } from "@mui/material";
import { OneNews } from "../../store/reducers/newsSlice";
import styles from "./styles/styles.module.css";
import TextField from "../shared/TextField";
import { convertTime } from "../../utils/convertTime";
import Link from "../shared/Link";

interface ICardById {
     data: OneNews;
}

const CardById: FC<ICardById> = ({ data }) => {
     return (
          <CardMUI className={styles.cardById}>
               <TextField text={data.title} Tag="h2" />
               {data.url && <Link url={data.url} />}
               <TextField text={data.by} type="author" />
               <TextField text={convertTime(data.time)} />
               <TextField text={data?.kids?.length || "0"} type="commentsCount" />
          </CardMUI>
     );
};

export default CardById;
