
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import lo from './logo.jpg'
  
// Contains the value and text for the options
const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'bn', text: "Bengali" },
    { value: 'gu', text: "Gujarati" }
]

export default function Navbar() {
  const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('');
  
    // This function put query that helps to 
    // change the language
    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }
  return (
    
       <div className='container mt-4 mb-4'  >
      <div className='nav1'>
        <nav className="navbar navbar-expand-lg bg-light navbar mt-2 navdefault " >
  <div className="container-fluid"  >
  <div className='logo'>
    <Link className="navbar-brand"  to="/">
      <img className='logo_img' src={lo} alt="" />
    </Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active navitem"  aria-current="page"  to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/Disease">Disease</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/firstaidbasics">First Aid Basics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/firstaidkit">First aid kit</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/Aboutus">About us</Link>
        </li>
        <li className="nav-item">
        <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
      </div>
    
  )
}
