import { useState } from 'react';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import JobBoard from './Components/JobBoard';
import JobDetail from './Components/JobDetail';
import Login from './Components/Login';
import JOBS from './jobs';

function App() {

  const [allJobs, setAllJobs] = useState(JOBS);

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/jobs' element={<JobBoard />} />
        <Route path='/job/:id' element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
