import React, { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
     return (
          <Backdrop sx={{ color: "#fff", backgroundColor: "gray", opacity: 0.5, zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
               <CircularProgress color="inherit" />
          </Backdrop>
     );
};

export default Loader;
