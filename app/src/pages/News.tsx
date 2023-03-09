import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/types";
import { useGetIdsAllNewsQuery, useLazyGetNewsByIdQuery } from "../store/api/hackerNews";
import { OneNews, setNewsArr } from "../store/reducers/newsSlice";
import Loader from "../UI/shared/Backdrop";
import { IFetchInfo } from "./types/NewsTypes";

const News = () => {
     const { data: IdsAllNews, isLoading: isLoadingIdsAllNews } = useGetIdsAllNewsQuery(null, {
          // pollingInterval: 1000
     });
     const [getNewsById] = useLazyGetNewsByIdQuery();
     const dispatch = useAppDispatch();
     const news = useAppSelector((state) => state.newsSlice.news);
     const [fetchInfo, setFetchInfo] = React.useState<IFetchInfo>({ error: "", isLoading: false });

     const fetch100News = async () => {
          setFetchInfo((prev) => ({ ...prev, isLoading: true }));
          try {
               setFetchInfo((prev) => ({ ...prev, error: "" }));
               const news = await Promise.all(
                    IdsAllNews.slice(0, 100).map((id: number) => {
                         return getNewsById(id);
                    })
               );
               const correctedNews = news.map(({ data }: { data: OneNews }) => data);
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

     React.useEffect(() => {
          console.log("IS LOAD", fetchInfo.isLoading);
     }, [fetchInfo.isLoading]);
     return (
          <div>
               {(fetchInfo.isLoading || isLoadingIdsAllNews) && <Loader />}
               {news.map((item) => {
                    return (
                         <div key={item.id} style={{ border: "2px solid black" }}>
                              <h1>{item.title}</h1>
                              <h2>{item.time}</h2>
                              <h2>{item.url}</h2>
                              <h2>{item.by}</h2>
                         </div>
                    );
               })}
          </div>
     );
};

export default News;
