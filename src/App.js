import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SummarizeForm from './components/SummarizeForm';
import HistoryPage from './components/HistoryPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SummarizeForm />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
