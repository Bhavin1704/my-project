import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquare} from 'react-icons/bi'
import './nav.css'
import { useState } from 'react'
export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#portfolio'><RiServiceLine onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}/></a>
      <a href='#contact'><BiMessageSquare onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}/></a>
    </nav>
  )
}
export default Nav;
