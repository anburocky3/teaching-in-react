import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import ContactPage from "./pages/ContactPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import BlogDetailPage from "./pages/blog/BlogDetailPage.jsx";
import BlogListing from "./pages/blog/BlogListing.jsx";
import AppProvider from "./context/AppContext.jsx";
import ExperimentPage from "./pages/experiments/ExperimentPage.jsx";
import ExperimentIndexPage from "./pages/experiments/ExperimentIndexPage.jsx";
import MemoHookPage from "./pages/experiments/MemoHookPage.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      {/*
    1. / - Home page
      2. /about - About page
      3. /contact - Contact page
    */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />}>
          <Route index element={<div>About Index Page</div>} />
          <Route path="team" element={<div>About Team Page</div>} />
          <Route path="mission" element={<div>About Mission Page</div>} />
        </Route>
        {/*
          /about -> AboutPage
          /about/team -> AboutTeamPage
          /about/mission -> AboutMissionPage
        */}
        <Route path="/users" element={<UsersPage />} />
        <Route path="/blog" element={<BlogPage />}>
          <Route index element={<BlogListing />} />
          <Route path=":id" element={<BlogDetailPage />} />
        </Route>
        <Route path="/experiments" element={<ExperimentPage />}>
          <Route index element={<ExperimentIndexPage />} />
          <Route path="usememo" element={<MemoHookPage />} />
          <Route path="usereducer" element={<div>UseReducer Experiment</div>} />
        </Route>
        {/*
        /blog -> BlogPage
        /blog/:id -> BlogDetailsPage
        /blog/author -> BlogAuthorPage
        */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </AppProvider>,
);
