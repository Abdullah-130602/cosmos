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

function App() {
  return (
    <>
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
          <Route exact path="/issues" element={<Issues />} />
          <Route exact path="/downloads" element={<DownloadsOfAuthors />} />
          <Route exact path="/apply-hardcopy" element={<ApplyForHardcopy />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
