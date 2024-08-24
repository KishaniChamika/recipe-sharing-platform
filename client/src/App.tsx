import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// Import other components/pages as needed
import { Auth } from './pages/Authentication/auth';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
