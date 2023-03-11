import React, { FC } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles/styles.module.css";

const ButtonBack = () => {
     return (
          <Link className={styles.buttonBack} to={`/`}>
               <Button variant="text">BACK</Button>
          </Link>
     );
};

export default ButtonBack;
