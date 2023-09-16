import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router