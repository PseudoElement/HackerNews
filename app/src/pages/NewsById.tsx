import React from "react";
import { useParams } from "react-router-dom";
import { useGetCommentsQuery, useGetNewsByIdQuery } from "../store/api/hackerNews";
import styles from "./styles/newsStyle.module.css";

const NewsById = () => {
     const { id } = useParams();
     const { data, isLoading, isError } = useGetNewsByIdQuery(id);
     // const { data: comments, isLoading: isLoadingComments } = useGetCommentsQuery();

     React.useEffect(() => {
          console.log("NEWS", data);
          // console.log("Comments", comments);
     }, [data]);

     return <div className={styles.newsByIdWrapper}>NEWS {id}</div>;
};

export default NewsById;
