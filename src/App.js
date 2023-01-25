import { useState, useEffect } from "react";
import "./index.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import JobBoard from "./Components/JobBoard";
import JobDetail from "./Components/JobDetail";
import Login from "./Components/Login";
import JOBS from "./jobs";

function App() {
  const navigate = useNavigate();

  const [allJobs, setAllJobs] = useState(JOBS);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      navigate("/jobs");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
