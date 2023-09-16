import React from 'react'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
import TemplateLayout from '../Components/TemplateLayout';
import Detail from './Detail';
import Favs from './Favs';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<TemplateLayout />}>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path='/dentist/:id' element={<Detail />}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path="/" element={<Navigate  to="/home" />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router