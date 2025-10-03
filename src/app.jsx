import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/news.jsx";
import Frontpage from "./pages/frontpage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
