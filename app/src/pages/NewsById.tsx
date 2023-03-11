import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/types";
import { useGetNewsByIdQuery, useLazyGetCommentQuery } from "../store/api/hackerNews";
import { AnswersOfComment } from "../store/reducers/answersSlice";
import { IComment } from "../store/types/types";
import CardById from "../UI/features/CardById";
import Comment from "../UI/features/Comment";
import ButtonBack from "../UI/shared/ButtonBack";
import ButtonRefetch from "../UI/shared/ButtonRefetch";
import ButtonShowAnswers from "../UI/shared/ButtonShowAnswers";
import Loader from "../UI/shared/Loader";
import TextField from "../UI/shared/TextField";
import styles from "./styles/newsStyle.module.css";
import { IFetchInfo } from "./types/NewsTypes";

const NewsById = () => {
     const { id } = useParams();
     const { data, isError, isLoading } = useGetNewsByIdQuery(id);
     const [rootComments, setRootComments] = React.useState<Array<IComment | undefined>>([]);
     const [fetchInfo, setFetchInfo] = React.useState<IFetchInfo>({ error: "", isLoading: false });
     const [getComment] = useLazyGetCommentQuery();
     const answers = useAppSelector((state) => state.answersSlice.answers);

     const fetchAllrootComments = async () => {
          setFetchInfo((prev) => ({ ...prev, isLoading: true }));
          try {
               const response = await Promise.all(data!.kids!.map((id) => getComment(id)));
               const responseData = response.map(({ data }) => data);
               setRootComments(responseData);
          } catch (e: any) {
               setFetchInfo((prev) => ({ ...prev, error: e.message }));
          } finally {
               setFetchInfo((prev) => ({ ...prev, isLoading: false }));
          }
     };

     React.useEffect(() => {
          if (data && data.kids) {
               fetchAllrootComments();
          }
     }, [data]);
     return (
          <div className={styles.newsByIdWrapper}>
               {isError && <TextField type="error" text="SOMETHING GOT WRONG..." />}
               <ButtonBack />
               {isLoading && <Loader />}
               {data && <CardById data={data} />}
               <div className={styles.commentsWrapper}>
                    <div className={styles.commentsHeader}>
                         <TextField Tag="h1" text="Comments:" />
                         <div className={styles.refetchAndLoaderLayer}>
                              <ButtonRefetch text="Renew comments" onClick={fetchAllrootComments} />
                              {fetchInfo.isLoading && <Loader />}
                         </div>
                    </div>
                    <div className={styles.commentsMain}>
                         {rootComments.length
                              ? rootComments.map((comment) => {
                                     return (
                                          <div className={styles.commentWithAnswersWrapper}>
                                               <div>
                                                    <Comment data={comment!} />
                                                    <ButtonShowAnswers commentId={comment!.id} kids={comment?.kids} />
                                               </div>
                                               {answers &&
                                               answers.length &&
                                               answers.find((answer: AnswersOfComment) => answer.parentId === comment?.id) &&
                                               Array.isArray(
                                                    answers.find((answer: AnswersOfComment) => answer.parentId === comment?.id).children
                                               ) ? (
                                                    <div className={styles.answersWrapper}>
                                                         {answers
                                                              .find((answer: AnswersOfComment) => answer.parentId === comment?.id)
                                                              .children.map((childrenComment: IComment) => (
                                                                   <Comment data={childrenComment} />
                                                              ))}
                                                    </div>
                                               ) : (
                                                    ""
                                               )}
                                          </div>
                                     );
                                })
                              : "No comments."}
                    </div>
               </div>
          </div>
     );
};

export default NewsById;
