import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/bt1/Home";
import Contact from "./components/bt2/Contact";
import Login from "./components/bt3/Login";
import Register from "./components/bt4/Register";
import NotFound from "./components/bt5/NotFound";
import Bt6 from "./components/bt6/Bt6-7";
import Bt8 from "./components/bt8/Bt8";
import HomePage from "./components/bt6/HomePage";
import About from "./components/bt6/About";
import Amin from "./components/bt8/Amin";
import Account from "./components/bt8/Account";
import Product from "./components/bt8/Product";
import RenderUser from "./components/bt10/RenderUser";
import CurrentLink from "./components/bt9/CurrentLink";
import Bt10 from "./components/bt10/Bt10";

export default function App() {
  return (
    <div>
      App
      <Routes>
        <Route path="/bt1" element={<Home />}></Route>
        <Route path="/bt2" element={<Contact />}></Route>
        <Route path="/bt3" element={<Login />}></Route>
        <Route path="/bt4" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/bt6" element={<Bt6 />}>
          <Route path="contact1" element={<About />} />
          <Route path="home1" element={<HomePage />} />
        </Route>
        <Route path="/bt8" element={<Bt8 />}>
          <Route path="admin" element={<Amin />} />
          <Route path="account" element={<Account />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path='/Bt10' element={<Bt10 />} />
          <Route path='/Bt10/renderUser' element={<RenderUser />} />
          <Route path="/home-page" element={<HomePage></HomePage>} />
          <Route path="/not-found" element={<NotFound></NotFound>} />
          <Route path="/CurrentLink" element={<CurrentLink></CurrentLink>}></Route>
      </Routes>
    </div>
  );
}
