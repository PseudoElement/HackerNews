import { Route, Routes } from "react-router-dom";
import News from "../pages/News";
import NewsById from "../pages/NewsById";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router";

const AppRouter = () => {
     const navigate = useNavigate();

     return (
          <Routes>
               <Route path="/" element={<Navigate to="/news" />} />
               <Route path="/news" element={<News />} />
               <Route path="/news/:id" element={<NewsById />} />
          </Routes>
     );
};

export default AppRouter;
