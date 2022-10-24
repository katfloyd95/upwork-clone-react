import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import JobBoard from './Components/JobBoard';
import JobDetail from './Components/JobDetail';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/jobs' element={<JobBoard />} />
        <Route path='/job/:id' element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
