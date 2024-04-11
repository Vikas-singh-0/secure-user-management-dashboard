import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage/>} />
        <Route path="/signup" element={<SignInPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
