import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SerieDetails from "./pages/SerieDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series/:id" element={<SerieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
