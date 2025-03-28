import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const {authUser, checkAuth} = useAuthStore()

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  console.log({authUser})
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<ProfilePage />} />
        <Route path="/profile" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
