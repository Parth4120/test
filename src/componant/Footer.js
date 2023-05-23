import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='container'>
      <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item footer_item"><Link  to="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item footer_item"><Link to="/Contactus" className="nav-link px-2 text-muted">Contact us</Link></li>
      <li className="nav-item footer_item"><Link  to="/Disclaimer" className="nav-link px-2 text-muted">Disclaimer</Link></li>
    </ul>
    <a href="/" style={{textDecoration:"none"}}><p className="text-center text-muted">© 2022 Company, Inc</p></a>
  </footer>
 
    </div>
  )
}
