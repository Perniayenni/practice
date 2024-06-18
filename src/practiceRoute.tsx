import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/home/home";

const PracticeRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PracticeRoute;
