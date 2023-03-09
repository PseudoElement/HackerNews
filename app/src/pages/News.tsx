import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/types";
import { useGetIdsAllNewsQuery, useLazyGetNewsByIdQuery } from "../store/api/hackerNews";
import { OneNews, setNewsArr } from "../store/reducers/newsSlice";

const News = () => {
     const { data: IdsAllNews } = useGetIdsAllNewsQuery(null, {
          // pollingInterval: 1000
     });
     const [getNewsById] = useLazyGetNewsByIdQuery();
     const dispatch = useAppDispatch();
     const news = useAppSelector((state) => state.newsSlice.news);

     const fetch100News = async () => {
          const news = await Promise.all(
               IdsAllNews.slice(0, 100).map((id: number) => {
                    return getNewsById(id);
               })
          );
          const correctedNews = news.map(({ data }: { data: OneNews }) => data);
          dispatch(setNewsArr(correctedNews));
     };

     React.useEffect(() => {
          if (IdsAllNews) {
               fetch100News();
          }
     }, [IdsAllNews]);
     return (
          <div>
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
