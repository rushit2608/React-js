import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Pastrol12-removebg-preview.png'
import '../../index.css'
import { Link } from 'react-scroll'
import menuicon from '../../assets/menu-icon-19353.png'

const Navbar = () => {

  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY>500 ? setSticky(true) : setSticky(false);
      })
  },[]);
  const [mobilemenu,setMobileMenu] = useState(false);
  const toggelemenu=()=>{
      mobilemenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} className='logo'></img>
        <ul className={mobilemenu ? '':'hidemenu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='Products' smooth={true} offset={-250} duration={500}>Our Products</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About us</Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} offset={-250} duration={500}>Contact us</Link></button></li>
        </ul>
        <img src={menuicon} alt="" className='menuicon' onClick={toggelemenu} />
      </nav>
    </div>
  )
}

export default Navbar
