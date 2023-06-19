import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home"
import Sign from "../Pages/Sign";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

import Register from "../Pages/Register";

import React from 'react'
import Products from "../Pages/Products";

function Router() {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="*" element={<Error />} />
     </Routes>
  )
}

export default Router