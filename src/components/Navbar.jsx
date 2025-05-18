import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const location = useLocation();

  return (
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
          
      <Link to="/">
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>VisualAI</h1>
      </Link>
      <ul className='hidden md:flex'>
        <li className={`p-4 cursor-pointer ${location.pathname === '/' ? 'text-[#00df9a]' : 'hover:text-[#00df9a]'}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`p-4 cursor-pointer ${location.pathname === '/image-generator' ? 'text-[#00df9a]' : 'hover:text-[#00df9a]'}`}>
          <Link to="/image-generator">Image Generator</Link>
        </li>
        <li className={`p-4 cursor-pointer ${location.pathname === '/logo-generator' ? 'text-[#00df9a]' : 'hover:text-[#00df9a]'}`}>
          <Link to="/logo-generator">Logo Generator</Link>
        </li>
        <li className={`p-4 cursor-pointer ${location.pathname === '/about' ? 'text-[#00df9a]' : 'hover:text-[#00df9a]'}`}>
          <a href="/about">About</a>
        </li>
        <li className={`p-4 cursor-pointer ${location.pathname === '/contact' ? 'text-[#00df9a]' : 'hover:text-[#00df9a]'}`}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <MenuIcon size={20} /> : <X size={20} />}
      </div>
      
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>VisualAI</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]' onClick={handleNav}>
            <Link to="/">Home</Link>
          </li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]' onClick={handleNav}>
            <Link to="/image-generator">Image Generator</Link>
          </li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]' onClick={handleNav}>
            <Link to="/logo-generator">Logo Generator</Link>
          </li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]' onClick={handleNav}>
            <a href="#about">About</a>
          </li>
          <li className='p-4 cursor-pointer hover:text-[#00df9a]' onClick={handleNav}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;