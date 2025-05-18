import { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Generator from './components/Generator';
import LogoGenerator from './components/LogoGenerator';
import Hero from './components/Hero';
import About from './components/Aboutus';
import Contact from './components/Contact';

function App() {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/image-generator" element={<Generator />} />
        <Route path="/logo-generator" element={<LogoGenerator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;