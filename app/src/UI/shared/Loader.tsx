import React, { FC } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./styles/styles.module.css";

const Loader = () => {
     return <CircularProgress className={styles.loader} color="inherit" />;
};

export default Loader;
