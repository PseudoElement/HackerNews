import React from "react";
import { useParams } from "react-router-dom";
import { useGetNewsByIdQuery, useLazyGetCommentQuery } from "../store/api/hackerNews";
import { OneNews } from "../store/reducers/newsSlice";
import { IComment } from "../store/types/types";
import CardById from "../UI/features/CardById";
import styles from "./styles/newsStyle.module.css";

const NewsById = () => {
     const { id } = useParams();
     const { data, isLoading, isError } = useGetNewsByIdQuery(id);
     const [comments, setComments] = React.useState<Array<IComment | undefined>>([]);
     const [getComment, { isError: isErrorComments, isLoading: isLoadingComments }] = useLazyGetCommentQuery();
     const fetchAllComments = async () => {
          const response = await Promise.all(data!.kids!.map((id) => getComment(id)));
          const responseData = response.map(({ data }) => data);
          setComments(responseData);
     };

     React.useEffect(() => {
          if (data && data.kids) {
               console.log(data.kids);
               fetchAllComments();
          }
     }, [data]);

     return <div className={styles.newsByIdWrapper}>{data && <CardById data={data} />}</div>;
};

export default NewsById;
