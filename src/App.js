import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles-list" element={<ArticlesListPage />} />
            <Route path="/article/:name" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
