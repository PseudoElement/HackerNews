import React, { FC } from "react";
import styles from "./styles/styles.module.css";

enum TextFieldTags {
     h2 = "h2",
     h3 = "h3",
     h1 = "h1"
}
enum TextFieldTypes {
     author = "author",
     error = "error",
     commentsCount = "commentsCount",
     deletedComment = "deletedComment"
}

interface ITextField {
     Tag?: keyof typeof TextFieldTags;
     text: string | number;
     type?: keyof typeof TextFieldTypes;
}

const TextField: FC<ITextField> = ({ Tag = "h3", text, type }) => {
     return (
          <Tag className={`${styles[Tag]} ${type && styles[type]}`}>
               {type === "author" && "Published by "}
               {type === "commentsCount" && "Comments: "}
               {text}
          </Tag>
     );
};

export default TextField;
