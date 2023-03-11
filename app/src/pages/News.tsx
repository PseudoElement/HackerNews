import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/types";
import { useGetIdsAllNewsQuery, useLazyGetNewsByIdQuery } from "../store/api/hackerNews";
import { setNewsArr } from "../store/reducers/newsSlice";
import Card from "../UI/features/Card";
import Loader from "../UI/shared/Loader";
import { IFetchInfo } from "./types/NewsTypes";
import styles from "./styles/newsStyle.module.css";
import ButtonRefetch from "../UI/shared/ButtonRefetch";
import TextField from "../UI/shared/TextField";

const News = () => {
     const {
          data: IdsAllNews,
          isLoading: isLoadingIds,
          isError: isErrorIds
     } = useGetIdsAllNewsQuery(null, {
          pollingInterval: 1000
     });
     const [getNewsById, { isLoading: isLoadingNews }] = useLazyGetNewsByIdQuery();
     const dispatch = useAppDispatch();
     const news = useAppSelector((state) => state.newsSlice.news);
     const [fetchInfo, setFetchInfo] = React.useState<IFetchInfo>({ error: "", isLoading: false });

     const fetch100News = async () => {
          setFetchInfo((prev) => ({ ...prev, isLoading: true }));
          try {
               setFetchInfo((prev) => ({ ...prev, error: "" }));
               const news = await Promise.all(IdsAllNews!.slice(0, 100).map((id: number) => getNewsById(id)));
               const correctedNews = news.map(({ data }) => data).sort((a, b) => b!.time - a!.time);
               dispatch(setNewsArr(correctedNews));
          } catch (e: any) {
               setFetchInfo((prev) => ({ ...prev, error: e.message }));
          } finally {
               setFetchInfo((prev) => ({ ...prev, isLoading: false }));
          }
     };

     React.useEffect(() => {
          if (IdsAllNews) {
               fetch100News();
          }
     }, [IdsAllNews]);
     return (
          <div className={styles.generalWrapper}>
               <div className={styles.header}>
                    <ButtonRefetch text="REFETCH" onClick={fetch100News} />
                    {(isLoadingNews || fetchInfo.isLoading) && <Loader />}
               </div>
               <div className={styles.newsWrapper}>
                    {isErrorIds || fetchInfo.error ? (
                         <TextField text="SOMETHING GOT WRONG..." type="error" />
                    ) : (
                         news.map((item) => {
                              if (item !== null) {
                                   return <Card key={item.id} data={item} />;
                              }
                         })
                    )}
               </div>
          </div>
     );
};

export default News;
