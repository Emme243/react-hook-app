import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const AppRouter = () => {
  return (
    <div className="container my-5">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
