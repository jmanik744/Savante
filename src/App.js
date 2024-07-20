import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage/index';
import BrandSignUp from './components/Brandpage/index';
import InfluencerSignUp from './components/Influencerpage/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/brand" element={<BrandSignUp />} />
        <Route path="/signup/influencer" element={<InfluencerSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
