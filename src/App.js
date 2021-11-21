import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Details from "./pages/Details";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/dataSlice";
import Shortlisted from "./pages/Shortlisted";
import Rejected from "./pages/Rejected";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shortlisted" element={<Shortlisted />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
