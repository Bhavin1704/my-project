import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from "../../assets/bhavin2.JPEG"
import HederSocial from './HederSocial';
import { useState, useEffect } from 'react';



export const Header = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/name")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <header>
      <button className='btn'></button>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>{name}</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HederSocial />
        <div className='me'>
          <img src={ME} alt='Bhavin Panchal' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;

