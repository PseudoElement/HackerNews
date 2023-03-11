import React, { FC } from "react";
import { IComment } from "../../store/types/types";
import { decodeText } from "../../utils/decodeText";
import TextField from "../shared/TextField";
import styles from "./styles/styles.module.css";

enum CommentTypes {
     answer = "answer",
     rootComment = "rootComment"
}

interface ICommentProps {
     data: IComment;
     type?: keyof typeof CommentTypes;
}

const Comment: FC<ICommentProps> = ({ data, type = "rootComment" }) => {
     return (
          <div className={`${styles.comment} ${type && styles[type]}`}>
               {!data.deleted ? (
                    <>
                         <TextField Tag="h2" text={data.by} type={type} />
                         <TextField text={decodeText(data.text)} />
                    </>
               ) : (
                    <TextField text="Comment was deleted." Tag="h1" type="deletedComment" />
               )}
          </div>
     );
};

export default Comment;
