import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

import "./app.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
