import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "./redux/campers/thunks";

// Lazy load components
const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const TruckView = lazy(() => import("./pages/TruckView/TruckView"));
// Home page
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={<Catalog />} />
        <Route path="/campers/:id" element={<TruckView />} />
      </Routes>
    </Suspense>
  );
};

export default App;
