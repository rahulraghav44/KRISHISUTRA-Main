import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import HomePage from './landingPage/Home/HomePage';
import Signup from './landingPage/Signup/Signup';
import AboutPage from './landingPage/About/AboutPage';
import BlogPage from './landingPage/Blogs/BlogPage';
import ProductPage from './landingPage/Product/ProductPage';
import SupportPage from './landingPage/Support/SupportPage';
import NotFound from './landingPage/NotFound';
import ScrollToTop from './landingPage/scroll';

import "@fortawesome/fontawesome-free/css/all.min.css";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Navbar/>
  <ScrollToTop />
  <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/blogs" element={<BlogPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>

      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>

  </BrowserRouter>
 
   

);


