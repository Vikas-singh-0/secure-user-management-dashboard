import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
// import SignUpPage from './pages/SignUpPage';
import store from './store'
import { useSelector } from "react-redux";
import DashboardPage from "./pages/DashboardPage";
import { Provider } from "react-redux";

const App: React.FC = () => {
  // const user = useSelector((state) => state.token);
  console.log(store.getState());
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
