import React, { FC } from "react";
import { Button } from "@mui/material";

interface IButtonRefetch {
     onClick: () => void;
     text: string;
}

const ButtonRefetch: FC<IButtonRefetch> = ({ onClick, text }) => {
     return (
          <Button onClick={onClick} variant="contained">
               {text}
          </Button>
     );
};

export default ButtonRefetch;
