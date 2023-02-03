import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Accessory from "./components/Accessory";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Fashion from "./components/Fashion";
import Digital from "./components/Digital";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="accessory" element={<Accessory />} />
        <Route path="digital" element={<Digital />} />
        <Route path="product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
