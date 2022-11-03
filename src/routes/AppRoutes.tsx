import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorScreen } from "../screens/ErrorScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { InteligenceScreen } from "../screens/InteligenceScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import { ResultScreen } from "../screens/ResultScreen";

export const AppRoutes = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/inteligence" element={<InteligenceScreen />}></Route>
          <Route path="/result" element={<ResultScreen />}></Route>
          <Route path="/error" element={<ErrorScreen />}></Route>
          <Route path="/loading" element={<LoadingScreen />}></Route>
        </Routes>
      </Router>
  );
};
