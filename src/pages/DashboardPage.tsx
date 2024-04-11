import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const userToken = localStorage.getItem("us");
    if (userToken) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('us');
    navigate('/');
  };
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p className="text-gray-600">This is the protected dashboard page.</p>
      <button type="button" onClick={handleLogout} className="bg-blue-500 text-white py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
