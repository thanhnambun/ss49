import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "./components/register/NotFound";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import HomePage from "./components/register/HomePage";
import Home from "./components/trangchu/Home";

export default function App() {
  return (
    <div>
      App
      <Routes>
        <Route path="/trangchu" element={<Home/>}></Route>
        <Route index element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );bt
}
