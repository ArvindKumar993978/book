import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthorProfile from "./pages/AuthorProfile";
// import Authors from "./pages/Authors";
import BookDetailPage from "./pages/BookDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AuthorProfile" element={<AuthorProfile />} />
      {/* <Route path="/authors" element={<Authors />} /> */}
      <Route path="/BookDetailPage" element={<BookDetailPage />} />
    </Routes>
  );
}

export default App;