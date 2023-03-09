import React from "react";
import "./App.css";
import { useGetIdsAllNewsQuery } from "./store/api/hackerNews";
import { useNavigate } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
     // const fetchStoriesById = async () => {
     //      const latestStoriesUrl = "https://hacker-news.firebaseio.com/v0/newstories.json";

     //      // Fetch the latest story IDs
     //      const latestStoryIds = await fetch(latestStoriesUrl).then((res) => res.json());
     //      // Fetch the details of each story
     //      const latestStories = await Promise.all(
     //           latestStoryIds.slice(0, 10).map((storyId: number) => {
     //                const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
     //                return fetch(storyUrl).then((res) => res.json());
     //           })
     //      );
     //      setStories(latestStories);
     // };

     return <AppRouter />;
}

export default App;
