import { Route, Routes } from "react-router-dom";
import News from "../pages/News";
import NewsById from "../pages/NewsById";

const AppRouter = () => {
     return (
          <Routes>
               <Route path="/news" element={<News />} />
               <Route path="/news/:id" element={<NewsById />} />
          </Routes>
     );
};

export default AppRouter;
