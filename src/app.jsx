import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/news.jsx";
import Frontpage from "./pages/frontpage.jsx";
import NewsPost from "./pages/news_post.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<NewsPost />} />
    </Routes>
  );
}

export default App;
