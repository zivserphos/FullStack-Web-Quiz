import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./state/pages/Home";
import NavBar from "./state/components/NavBar";

const App = function () {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
