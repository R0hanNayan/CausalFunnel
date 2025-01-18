import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Wrapper from './utils/Wrapper';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Wrapper child={<Login />} />} />
      <Route path="/quiz" element={<Wrapper child={<Quiz />} />} />
      <Route path="/results" element={<Wrapper child={<Results />} />} />
    </Routes>
  </Router>
);

export default App;
