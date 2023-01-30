import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Code, Issues, Pullrequest } from "./pages";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/code" element={<Code/>} />
          <Route path="/pullrequest" element={<Pullrequest/>} />
          <Route path="/issues" element={<Issues />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
