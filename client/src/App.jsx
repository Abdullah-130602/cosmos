import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditorialLeadership from "./Pages/EditorialLeadership";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/editorial-leadership" element={<EditorialLeadership />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
