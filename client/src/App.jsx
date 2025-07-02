import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditorialLeadership from "./Pages/EditorialLeadership";
import AboutTheJournal from "./Pages/Journal";
import PoliciesOfJournal from "./Pages/Policies";
import SubmitArticle from "./Pages/Article";
import Issues from "./Pages/Issues";
import DownloadsOfAuthors from "./Pages/Downloads";
import ContactUs from "./Pages/ContactUs";
import ApplyForHardcopy from "./Pages/HardCopy";
import Layout from "./Layout";
import Login from "./Pages/Auth/Login";
import { useLayout } from "./Context/LayoutContext";
import Register from "./Pages/Auth/Register";
import AuthLayout from "./Pages/Auth/AuthLayout";
import ArticleDetails from "./Pages/Issues/ArticleDetails";
import Archives from "./Pages/Issues/Archives";
import RequestedIssues from "./Pages/Issues/RequestedIssues";

function App() {
  const { currentUrl } = useLayout();

  return (
    <>
      {currentUrl === "/login" || currentUrl === "/register" ? (
        <AuthLayout>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </AuthLayout>
      ) : (
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/editorial-leadership"
              element={<EditorialLeadership />}
            />
            <Route exact path="/about-journal" element={<AboutTheJournal />} />
            <Route
              exact
              path="/policies-of-journal"
              element={<PoliciesOfJournal />}
            />
            <Route exact path="/submit-article" element={<SubmitArticle />} />
            <Route
              exact
              path="/article-details/:id"
              element={<ArticleDetails />}
            />
            <Route exact path="/current-issues" element={<Issues />} />
            <Route exact path="/archives" element={<Archives />} />
            <Route exact path="/articles/:month/:year" element={<RequestedIssues />} />
            <Route exact path="/downloads" element={<DownloadsOfAuthors />} />
            <Route
              exact
              path="/apply-hardcopy"
              element={<ApplyForHardcopy />}
            />
            <Route exact path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
