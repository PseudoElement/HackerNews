import { Route, Routes } from "react-router-dom";
import News from "../pages/News";
import NewsById from "../pages/NewsById";

const AppRouter = () => {
     return (
          <Routes>
               <Route path="/" element={<News />} />
               <Route path="/:id" element={<NewsById />} />
          </Routes>
     );
};

export default AppRouter;
