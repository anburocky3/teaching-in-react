import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import ContactPage from "./pages/ContactPage.jsx";
import UsersPage from "./pages/users/UsersPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import BlogDetailPage from "./pages/blog/BlogDetailPage.jsx";
import BlogListing from "./pages/blog/BlogListing.jsx";
import AppProvider from "./context/AppContext.jsx";
import ExperimentPage from "./pages/experiments/ExperimentPage.jsx";
import ExperimentIndexPage from "./pages/experiments/ExperimentIndexPage.jsx";
import MemoHookPage from "./pages/experiments/MemoHookPage.jsx";
import ReactUseMemoPage from "./pages/experiments/ReactUseMemoPage.jsx";
import AboutIndex from "./pages/about/AboutIndex.jsx";
import InternsCreate from "./pages/users/InternsCreate.jsx";

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
          <Route index element={<AboutIndex />} />
          <Route path="team" element={<div>About Team Page</div>} />
          <Route path="mission" element={<div>About Mission Page</div>} />
        </Route>
        {/*
          /about -> AboutPage
          /about/team -> AboutTeamPage
          /about/mission -> AboutMissionPage
        */}
        <Route path="/users">
          <Route index element={<UsersPage />} />
          <Route path="create" element={<InternsCreate />} />
        </Route>
        <Route path="/blog" element={<BlogPage />}>
          <Route index element={<BlogListing />} />
          <Route path=":id" element={<BlogDetailPage />} />
        </Route>
        <Route path="/experiments" element={<ExperimentPage />}>
          <Route index element={<ExperimentIndexPage />} />
          <Route path="reactmemo" element={<MemoHookPage />} />
          <Route path="usememo" element={<ReactUseMemoPage />} />
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
