import React, { FC } from "react";
import { Rating as RatingMUI } from "@mui/material";
import styles from "./styles/styles.module.css";

interface IRating {
     value: number;
}

const Rating: FC<IRating> = ({ value }) => {
     return (
          <div className={styles.ratingWrapper}>
               Rating:
               <RatingMUI className={styles.stars} value={value} readOnly />
          </div>
     );
};

export default Rating;
