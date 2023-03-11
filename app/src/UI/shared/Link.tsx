import React, { FC } from "react";
import { Link as LinkMUI } from "@mui/joy";
interface ILink {
     url: string;
}

const Link: FC<ILink> = ({ url }) => {
     return (
          <LinkMUI href={url} target="_blank" color="primary" underline="none" disabled={false} variant="soft" level="h3">
               {url}
          </LinkMUI>
     );
};

export default Link;
