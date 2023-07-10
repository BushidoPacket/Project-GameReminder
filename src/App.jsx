import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Game />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
