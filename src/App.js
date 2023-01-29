import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Issues from "./pages/Issues/Issues"
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/issues" element={<Issues />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
