import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Poster from './Components/Poster/Poster';
import Join from './Components/Join/Join';
import CookieConsent from './Components/CookieConsent/CookieConsent';
import Drinks from './Components/Drinks/Drinks';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Store from './Components/Store/Store';
import Promotions from './Components/Promotions/Promotions';
import Contacts from './Components/Contacts/Contacts';
import CartBox from './Components/CartBox/CartBox';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Poster />
          <Join />
          <CookieConsent />
          <Drinks />
          <Contact />
        </>} />
        <Route path="/products" element={<Products />} />
        <Route path="/store" element={<Store />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<CartBox />} />
      </Routes>
    </Router>
  );
};

export default App;


