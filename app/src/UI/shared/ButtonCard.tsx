import React, { FC } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface IButtonCard {
     text: string;
     id: number;
}

const ButtonCard: FC<IButtonCard> = ({ text, id }) => {
     return (
          <Link to={`/${id}`}>
               <Button variant="text">{text}</Button>
          </Link>
     );
};

export default ButtonCard;
