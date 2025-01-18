import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login'
import Quiz from './components/Quiz'; 
import Results from './components/Results'; 
import Wrapper from './utils/Wrapper'; 


const App = () => (
  <Router> 
    <Routes> 
      {/* Route for the login page, wrapped in the Wrapper component for consistent layout */}
      <Route path="/" element={<Wrapper child={<Login />} />} /> 
      {/* Route for the quiz page */}
      <Route path="/quiz" element={<Wrapper child={<Quiz />} />} />
      {/* Route for the results page */}
      <Route path="/results" element={<Wrapper child={<Results />} />} />
    </Routes>
  </Router>
);

export default App; 
