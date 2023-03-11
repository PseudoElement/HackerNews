import React, { FC } from "react";
import { IComment } from "../../store/types/types";
import TextField from "../shared/TextField";
import styles from "./styles/styles.module.css";

interface ICommentProps {
     data: IComment;
}

const Comment: FC<ICommentProps> = ({ data }) => {
     return (
          <div className={styles.comment}>
               {!data.deleted ? (
                    <>
                         <TextField Tag="h2" text={data.by} />
                         <TextField text={data.text} />
                    </>
               ) : (
                    <TextField text="Comment was deleted." Tag="h1" type="deletedComment" />
               )}
          </div>
     );
};

export default Comment;
